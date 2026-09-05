import { createClient, SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const rawSanityClient: SanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || "vvop3ax4",
  dataset: import.meta.env.VITE_SANITY_DATASET || "production",
  useCdn: true,
  apiVersion: "2024-05-08",
});

// In-memory query cache & in-flight promise map
interface CacheEntry {
  data: any;
  timestamp: number;
}

const queryCache = new Map<string, CacheEntry>();
const inFlightRequests = new Map<string, Promise<any>>();
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes in-memory cache

// Proxy fetch method with caching & in-flight de-duplication
const cachedFetch = async (query: string, params?: Record<string, any>, options?: any) => {
  const cacheKey = JSON.stringify({ query, params });

  // 1. Check if cached and within TTL
  const cached = queryCache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL_MS) {
    return cached.data;
  }

  // 2. Check if a request for the exact query is already in flight (prevents simultaneous burst queries)
  if (inFlightRequests.has(cacheKey)) {
    return inFlightRequests.get(cacheKey);
  }

  // 3. Initiate request, store in-flight promise, cache response on resolution
  const fetchPromise = (async () => {
    try {
      const data = await rawSanityClient.fetch(query, params as any, options);
      queryCache.set(cacheKey, { data, timestamp: Date.now() });
      return data;
    } catch (err) {
      // If cached data is available (even if expired), fallback to stale cache on network/rate-limit error
      if (cached) {
        console.warn("Sanity fetch failed, serving stale cached data:", err);
        return cached.data;
      }
      throw err;
    } finally {
      inFlightRequests.delete(cacheKey);
    }
  })();

  inFlightRequests.set(cacheKey, fetchPromise);
  return fetchPromise;
};

// Export proxied client with cached fetch to keep full backward compatibility across all components
export const sanityClient = new Proxy(rawSanityClient, {
  get(target, prop, receiver) {
    if (prop === "fetch") {
      return cachedFetch;
    }
    return Reflect.get(target, prop, receiver);
  },
}) as SanityClient;

const builder = imageUrlBuilder(rawSanityClient);

export function urlFor(source: any) {
  return builder.image(source).auto('format').fit('max');
}

/**
 * Utility to manually clear or invalidate the Sanity in-memory query cache
 */
export function clearSanityCache() {
  queryCache.clear();
  inFlightRequests.clear();
}
