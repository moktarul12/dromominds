import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { createClient } from "@sanity/client";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  // Add JSON parsing middleware
  app.use(express.json());

  // Initialize Sanity Client for server-side mutations
  const sanityClient = createClient({
    projectId: process.env.VITE_SANITY_PROJECT_ID || "missing-project-id",
    dataset: process.env.VITE_SANITY_DATASET || "production",
    useCdn: false,
    apiVersion: "2024-03-01",
    token: process.env.SANITY_API_TOKEN,
  });

  // API endpoints
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.post("/api/newsletter", async (req, res) => {
    try {
      const { email } = req.body;
      if (!email || !email.includes("@")) {
        return res.status(400).json({ error: "Invalid email address" });
      }

      if (!process.env.SANITY_API_TOKEN) {
         return res.status(500).json({ error: "Server is missing SANITY_API_TOKEN configuration" });
      }

      // Create a doc in Sanity with _type: 'newsletter'
      const doc = {
        _type: 'newsletter',
        email,
        subscribedAt: new Date().toISOString(),
      };

      await sanityClient.create(doc);
      
      return res.status(200).json({ message: "Successfully subscribed" });
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      return res.status(500).json({ error: "Failed to subscribe" });
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const { firstName, lastName, email, company, inquiryType, message } = req.body;
      
      if (!firstName || !email || !message) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      if (!process.env.SANITY_API_TOKEN) {
         return res.status(500).json({ error: "Server is missing SANITY_API_TOKEN configuration" });
      }

      // Create a doc in Sanity with _type: 'contactSubmission'
      const doc = {
        _type: 'contactSubmission',
        firstName,
        lastName,
        email,
        company,
        inquiryType,
        message,
        submittedAt: new Date().toISOString(),
      };

      await sanityClient.create(doc);
      
      return res.status(200).json({ message: "Successfully submitted contact form" });
    } catch (error) {
      console.error("Contact form error:", error);
      return res.status(500).json({ error: "Failed to submit contact form" });
    }
  });

  app.post("/api/lead", async (req, res) => {
    try {
      const { firstName, email, company, resourceName } = req.body;
      
      if (!firstName || !email) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      if (!process.env.SANITY_API_TOKEN) {
         return res.status(500).json({ error: "Server is missing SANITY_API_TOKEN configuration" });
      }

      // Create a doc in Sanity with _type: 'leadDownload'
      const doc = {
        _type: 'leadDownload',
        firstName,
        email,
        company: company || "",
        resourceName: resourceName || "CSV to CSA Transition Kit",
        downloadedAt: new Date().toISOString(),
      };

      await sanityClient.create(doc);
      
      return res.status(200).json({ message: "Lead captured successfully" });
    } catch (error) {
      console.error("Lead capture error:", error);
      return res.status(500).json({ error: "Failed to capture lead" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
