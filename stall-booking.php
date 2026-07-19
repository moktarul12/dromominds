<?php
$page_title = 'StallSpot — Stall Booking Platform | DromoMinds Solutions';
$page_desc = 'Book exhibition stalls like cinema seats. StallSpot by DromoMinds offers interactive floor plans, live availability, tiered pricing and instant confirmation for expos, trade fairs and melas.';
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
            <div class="breadcrumb"><a href="/">Home</a> / <a href="/products">Products</a> / StallSpot</div>
            <h1>Book a stall like you<br>book a cinema seat.</h1>
            <p>StallSpot turns exhibition stall booking from a week of phone calls into a three-minute checkout. Pick your spot on a live floor plan, pay, and you're confirmed — for expos, trade fairs, melas and conventions.</p>
            <div class="hero-actions" style="margin-top: 36px;">
                <a href="#demo" class="btn btn-crimson">Try the Live Floor Plan <i class="fas fa-arrow-down"></i></a>
                <a href="/contact" class="btn btn-ghost-light">Get StallSpot for Your Event</a>
            </div>
        </div>
    </section>

    <!-- ============ LIVE DEMO ============ -->
    <section class="section" id="demo">
        <div class="container">
            <div class="section-head center reveal">
                <div class="kicker">Live Demo</div>
                <h2 class="section-title">Pick your stalls. Watch the total update.</h2>
                <p class="section-sub">This is a working slice of the real product — gold stalls face the main stage, hatched ones are already taken.</p>
            </div>
            <div class="stall-demo reveal">
                <div class="stall-demo-head">
                    <div>
                        <h3>Hall 2 — Grand Trade Expo 2026</h3>
                        <p>Bengaluru International Exhibition Centre &middot; 12–15 Nov 2026</p>
                    </div>
                    <div class="stall-legend">
                        <span><i class="lg-free"></i> Available</span>
                        <span><i class="lg-prem"></i> Premium</span>
                        <span><i class="lg-sel"></i> Selected</span>
                        <span><i class="lg-booked"></i> Booked</span>
                    </div>
                </div>
                <div class="stall-layout">
                    <div class="stall-floor">
                        <div class="stall-stage">Main Stage &amp; Entrance</div>
                        <div class="stall-grid" id="stallGrid"></div>
                    </div>
                    <div class="stall-summary">
                        <h4><i class="fas fa-cart-shopping"></i> Your Selection</h4>
                        <div class="ss-rows" id="ssRows">
                            <div class="ss-empty">No stalls selected yet — tap any available stall on the floor plan.</div>
                        </div>
                        <div class="ss-total">
                            <span>Total</span>
                            <strong id="ssTotal">₹0</strong>
                        </div>
                        <button class="btn btn-crimson" id="ssBook"><i class="fas fa-lock"></i> Reserve Selected Stalls</button>
                        <p style="font-size: 12px; color: var(--slate-light); margin-top: 14px; text-align: center;">Demo only — no payment will be taken.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ============ FEATURES ============ -->
    <section class="section section-white">
        <div class="container">
            <div class="section-head reveal">
                <div class="kicker">Why StallSpot</div>
                <h2 class="section-title">Everything an organiser juggles, in one dashboard.</h2>
            </div>
            <div class="svc-grid">
                <div class="svc-card reveal" data-num="01">
                    <div class="svc-icon"><i class="fas fa-map"></i></div>
                    <h3>Interactive Floor Plans</h3>
                    <p>Upload your hall layout once. StallSpot renders it as a zoomable, tappable map with live availability across every hall and zone.</p>
                </div>
                <div class="svc-card reveal reveal-d1" data-num="02">
                    <div class="svc-icon"><i class="fas fa-tags"></i></div>
                    <h3>Tiered Zone Pricing</h3>
                    <p>Premium corners near the stage, standard rows, economy back walls — set per-zone rates, early-bird windows and bulk discounts.</p>
                </div>
                <div class="svc-card reveal reveal-d2" data-num="03">
                    <div class="svc-icon"><i class="fas fa-bolt"></i></div>
                    <h3>Instant Confirmation</h3>
                    <p>Payment gateway, GST invoice and booking confirmation fire in one flow. Stalls lock in real time so double-booking is impossible.</p>
                </div>
                <div class="svc-card reveal" data-num="04">
                    <div class="svc-icon"><i class="fas fa-id-card"></i></div>
                    <h3>Exhibitor Management</h3>
                    <p>KYC document collection, exhibitor profiles, staff passes and QR check-in on event day — no more clipboard queues.</p>
                </div>
                <div class="svc-card reveal reveal-d1" data-num="05">
                    <div class="svc-icon"><i class="fas fa-chart-pie"></i></div>
                    <h3>Occupancy Analytics</h3>
                    <p>Heatmaps of which zones sell first, revenue tracking by hall, and forecasts to price your next edition better.</p>
                </div>
                <div class="svc-card reveal reveal-d2" data-num="06">
                    <div class="svc-icon"><i class="fas fa-envelope-open-text"></i></div>
                    <h3>Automated Comms</h3>
                    <p>Reminders, balance-due notices, setup instructions and event-day passes go out automatically over email and WhatsApp.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- ============ PRICING ============ -->
    <section class="section">
        <div class="container">
            <div class="section-head center reveal">
                <div class="kicker">Stall Tiers</div>
                <h2 class="section-title">Simple tiers your exhibitors will understand.</h2>
                <p class="section-sub">Example pricing from the demo hall above — every event sets its own rates.</p>
            </div>
            <div class="tier-grid">
                <div class="tier-card reveal">
                    <h3>Economy</h3>
                    <div class="t-size">2m &times; 2m &middot; Back rows</div>
                    <div class="t-price">₹15,000 <small>/ event</small></div>
                    <ul>
                        <li><i class="fas fa-check"></i> Table, 2 chairs &amp; fascia board</li>
                        <li><i class="fas fa-check"></i> 1 power point (5A)</li>
                        <li><i class="fas fa-check"></i> 2 exhibitor passes</li>
                        <li><i class="fas fa-check"></i> Listing in event directory</li>
                    </ul>
                    <a href="#demo" class="btn btn-ghost">Pick an Economy Stall</a>
                </div>
                <div class="tier-card hot reveal reveal-d1">
                    <span class="hot-badge">Most Popular</span>
                    <h3>Standard</h3>
                    <div class="t-size">3m &times; 3m &middot; Centre aisles</div>
                    <div class="t-price">₹25,000 <small>/ event</small></div>
                    <ul>
                        <li><i class="fas fa-check"></i> Everything in Economy</li>
                        <li><i class="fas fa-check"></i> Corner visibility options</li>
                        <li><i class="fas fa-check"></i> 4 exhibitor passes</li>
                        <li><i class="fas fa-check"></i> Spotlights + 15A power</li>
                        <li><i class="fas fa-check"></i> Logo on event website</li>
                    </ul>
                    <a href="#demo" class="btn btn-crimson">Pick a Standard Stall</a>
                </div>
                <div class="tier-card reveal reveal-d2">
                    <h3>Premium</h3>
                    <div class="t-size">4m &times; 4m &middot; Stage-facing front row</div>
                    <div class="t-price">₹45,000 <small>/ event</small></div>
                    <ul>
                        <li><i class="fas fa-check"></i> Everything in Standard</li>
                        <li><i class="fas fa-check"></i> Prime footfall next to main stage</li>
                        <li><i class="fas fa-check"></i> 8 exhibitor passes</li>
                        <li><i class="fas fa-check"></i> Branding on entrance arch</li>
                        <li><i class="fas fa-check"></i> Dedicated support manager</li>
                    </ul>
                    <a href="#demo" class="btn btn-ghost">Pick a Premium Stall</a>
                </div>
            </div>
        </div>
    </section>

    <!-- ============ HOW IT WORKS ============ -->
    <section class="section section-white">
        <div class="container">
            <div class="section-head center reveal">
                <div class="kicker">How It Works</div>
                <h2 class="section-title">From floor plan to fully-booked in four steps.</h2>
            </div>
            <div class="process-row">
                <div class="process-step reveal"><h3>Publish</h3><p>Organiser uploads the hall layout, marks stalls and sets tier pricing.</p></div>
                <div class="process-step reveal reveal-d1"><h3>Browse</h3><p>Exhibitors explore the live map, compare zones and shortlist stalls.</p></div>
                <div class="process-step reveal reveal-d2"><h3>Book &amp; Pay</h3><p>Select, pay online and receive instant confirmation with GST invoice.</p></div>
                <div class="process-step reveal reveal-d3"><h3>Exhibit</h3><p>QR check-in on event day, passes in hand, stall ready and waiting.</p></div>
            </div>
        </div>
    </section>

    <!-- ============ CTA ============ -->
    <section class="section">
        <div class="container">
            <div class="cta-panel reveal">
                <h2>Running an expo, fair or mela?</h2>
                <p>Get StallSpot deployed for your event with your own floor plan, branding and payment gateway — typically live within two weeks.</p>
                <a href="/contact" class="btn btn-crimson">Request a StallSpot Demo <i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
    </section>

    <?php include 'footer.php'; ?>
</body>
</html>
