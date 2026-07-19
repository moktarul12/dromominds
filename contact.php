<?php
$page_title = 'Contact Us | DromoMinds Solutions';
$page_desc = 'Get in touch with DromoMinds Solutions — Bangalore and Kolkata offices. Free consultation for AI, software, stall booking and pharma validation projects.';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <?php include 'head.php'; ?>
</head>
<body>
    <?php include 'header.php'; ?>

    <section class="page-hero">
        <div class="hero-orb hero-orb-1"></div>
        <div class="hero-grid-lines"></div>
        <div class="container">
            <div class="breadcrumb"><a href="index.php">Home</a> / Contact</div>
            <h1>Tell us what<br>you're building.</h1>
            <p>A project brief, a compliance question, or just an idea on a napkin — we reply within one business day.</p>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <div class="contact-wrap reveal">
                <div class="contact-side">
                    <h3>Let's talk.</h3>
                    <p>Free consultation, honest scoping, no hard sell.</p>
                    <div class="contact-line">
                        <div class="ic"><i class="fas fa-location-dot"></i></div>
                        <div><h4>Bangalore Office</h4><p>21 Adugodi, Koramangala,<br>Bangalore 560030, India</p></div>
                    </div>
                    <div class="contact-line">
                        <div class="ic"><i class="fas fa-location-dot"></i></div>
                        <div><h4>Kolkata Office</h4><p>Salt Lake Sector V,<br>Kolkata 700091, India</p></div>
                    </div>
                    <div class="contact-line">
                        <div class="ic"><i class="fas fa-phone"></i></div>
                        <div><h4>Phone</h4><p>+91 76766 07661</p></div>
                    </div>
                    <div class="contact-line">
                        <div class="ic"><i class="fas fa-envelope"></i></div>
                        <div><h4>Email</h4><p>contact@dromominds.com</p></div>
                    </div>
                </div>
                <div class="contact-form-pane">
                    <h3>Send us a message</h3>
                    <form id="contactForm">
                        <div class="form-grid">
                            <div class="form-field">
                                <label for="cf-name">Your Name</label>
                                <input id="cf-name" type="text" class="form-input" placeholder="Full name" required>
                            </div>
                            <div class="form-field">
                                <label for="cf-email">Email</label>
                                <input id="cf-email" type="email" class="form-input" placeholder="you@company.com" required>
                            </div>
                            <div class="form-field">
                                <label for="cf-phone">Phone</label>
                                <input id="cf-phone" type="tel" class="form-input" placeholder="+91">
                            </div>
                            <div class="form-field">
                                <label for="cf-topic">I'm interested in</label>
                                <select id="cf-topic" class="form-input">
                                    <option>AI &amp; Machine Learning</option>
                                    <option>Software / Web Development</option>
                                    <option>Mobile Apps</option>
                                    <option>StallSpot — Stall Booking Platform</option>
                                    <option>Pharma CSV Validation</option>
                                    <option>UI/UX Design</option>
                                    <option>Digital Marketing</option>
                                    <option>Something else</option>
                                </select>
                            </div>
                            <div class="form-field full">
                                <label for="cf-msg">Project details</label>
                                <textarea id="cf-msg" class="form-input" placeholder="Tell us about your project, timeline and budget if you have one..."></textarea>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-crimson" style="margin-top: 22px;">Send Message <i class="fas fa-paper-plane"></i></button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <?php include 'footer.php'; ?>
</body>
</html>
