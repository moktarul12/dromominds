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
            <div class="breadcrumb"><a href="/">Home</a> / Contact</div>
            <h1>Tell us what<br>you're building.</h1>
            <p>A project brief, a compliance question, or just an idea on a napkin — we reply within one business day.</p>
        </div>
    </section>

    <!-- ============ CO-FOUNDERS ============ -->
    <section class="section section-dark" style="padding-bottom: 60px;">
        <div class="container">
            <div class="section-head reveal">
                <div class="kicker">Meet the Co-Founders</div>
                <h2 class="section-title">You'll be talking to the people who built the company.</h2>
            </div>
            <div class="team-grid">
                <article class="team-card reveal">
                    <div class="team-avatar">MA</div>
                    <div class="team-meta">Co-Founder &middot; Software Development</div>
                    <h3>M. Anam</h3>
                    <p>20+ years of total experience in multinational companies, leading software development, technology delivery and dependable digital platforms.</p>
                    <div class="team-exp"><strong>20+</strong><span>Years in MNC environments</span></div>
                </article>
                <article class="team-card reveal reveal-d1">
                    <div class="team-avatar">SA</div>
                    <div class="team-meta">Co-Founder &middot; Pharma &amp; Compliance</div>
                    <h3>S. M. Anam</h3>
                    <p>15+ years of pharmaceutical industry experience across regulated operations, validation, quality systems and audit-readiness programmes.</p>
                    <div class="team-exp"><strong>15+</strong><span>Years in pharma</span></div>
                </article>
            </div>
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
                        <div><h4>Bangalore Office</h4><p>Dromominds Solution<br>#415 KHB Colony, Koramangala 5th Block<br>Bangalore 560095, Karnataka</p></div>
                    </div>
                    <div class="contact-line">
                        <div class="ic"><i class="fas fa-location-dot"></i></div>
                        <div><h4>Kolkata Office</h4><p>12 Alimuddin Street<br>Park Street, Kolkata 700016<br>West Bengal</p></div>
                    </div>
                    <div class="contact-line">
                        <div class="ic"><i class="fas fa-phone"></i></div>
                        <div><h4>Mobile</h4><p>+91 76766 09661</p></div>
                    </div>
                    <div class="contact-line">
                        <div class="ic"><i class="fas fa-envelope"></i></div>
                        <div>
                            <h4>Email</h4>
                            <p><a href="mailto:admin@dromominds.com" style="color:inherit;text-decoration:none;">admin@dromominds.com</a></p>
                            <p><a href="mailto:anam@dromominds.com" style="color:inherit;text-decoration:none;">anam@dromominds.com</a></p>
                            <p><a href="mailto:dm@dromominds.com" style="color:inherit;text-decoration:none;">dm@dromominds.com</a></p>
                        </div>
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
