<?php
$page_title = 'DromoMinds Solutions | Pharma Validation, AI Development & IT Services';
$page_desc = 'DromoMinds Solutions delivers GxP pharma validation — CSV/CSA, GAMP 5, FDA 21 CFR Part 11 — alongside AI products and custom software from Bangalore and Kolkata.';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <?php include 'head.php'; ?>
</head>
<body>
    <?php include 'header.php'; ?>

    <!-- ============ HERO ============ -->
    <section class="hero" id="home">
        <div class="hero-orb hero-orb-1"></div>
        <div class="hero-orb hero-orb-2"></div>
        <div class="hero-orb hero-orb-3"></div>
        <div class="hero-grid-lines"></div>
        <div class="hero-noise"></div>
        <div class="container">
            <div class="hero-inner">
                <div>
                    <div class="hero-eyebrow"><span class="dot"></span> Audit-Ready. Always.</div>
                    <h1>Intelligent systems. <span class="mark">Audit-ready</span> from <span class="stroke">day one</span>.</h1>
                    <p class="lead">DromoMinds helps organisations build, validate and maintain compliance-ready systems — with automation, traceability and confidence. Pharma validation first, world-class AI and software behind it.</p>
                    <div class="hero-actions">
                        <a href="validation.php" class="btn btn-crimson">Explore Pharma Validation <i class="fas fa-arrow-right"></i></a>
                        <a href="contact.php" class="btn btn-ghost-light">Talk to an Expert</a>
                    </div>
                    <div class="hero-metrics">
                        <div class="hero-metric">
                            <div class="num">Zero</div>
                            <div class="lbl">FDA 483 Findings</div>
                        </div>
                        <div class="hero-metric">
                            <div class="num" data-count="100">0<span>%</span></div>
                            <div class="lbl">Audit Success Rate</div>
                        </div>
                        <div class="hero-metric">
                            <div class="num" data-count="750">0<span>+</span></div>
                            <div class="lbl">Projects Delivered</div>
                        </div>
                    </div>
                </div>
                <div class="hero-visual">
                    <?php
                    $cube_faces = [
                        'front'  => ['flask', 'dna', 'pills', 'vial', 'microscope', 'atom', 'syringe', 'capsules', 'vials'],
                        'back'   => ['brain', 'microchip', 'code', 'robot', 'database', 'cloud', 'network-wired', 'server', 'shield-halved'],
                        'right'  => ['clipboard-check', 'file-shield', 'certificate', 'scale-balanced', 'magnifying-glass-chart', 'lock', 'fingerprint', 'check-double', 'book'],
                        'left'   => ['chart-line', 'gears', 'laptop-code', 'mobile-screen', 'diagram-project', 'terminal', 'bolt', 'cubes', 'wand-magic-sparkles'],
                        'top'    => ['flask-vial', 'prescription-bottle-medical', 'notes-medical', 'stethoscope', 'heart-pulse', 'staff-snake', 'tablets', 'droplet', 'biohazard'],
                        'bottom' => ['key', 'user-shield', 'eye', 'list-check', 'stamp', 'folder-open', 'signature', 'timeline', 'clipboard-list'],
                    ];
                    // one glowing tile of each accent colour per face, in rotating positions
                    $glow_map = [
                        'front'  => [0 => 'glow-c', 4 => 'glow-v', 8 => 'glow-t'],
                        'back'   => [2 => 'glow-v', 4 => 'glow-c', 6 => 'glow-t'],
                        'right'  => [1 => 'glow-t', 3 => 'glow-c', 7 => 'glow-v'],
                        'left'   => [0 => 'glow-v', 5 => 'glow-t', 7 => 'glow-c'],
                        'top'    => [2 => 'glow-c', 4 => 'glow-t', 6 => 'glow-v'],
                        'bottom' => [1 => 'glow-c', 5 => 'glow-v', 8 => 'glow-t'],
                    ];
                    ?>
                    <div class="cube-scene">
                        <div class="cube-glow"></div>
                        <div class="cube-wave"></div>
                        <div class="cube">
                            <?php foreach ($cube_faces as $face => $icons): ?>
                            <div class="cube-face f-<?php echo $face; ?>">
                                <?php foreach ($icons as $i => $icon): ?>
                                <div class="cube-tile <?php echo $glow_map[$face][$i] ?? ''; ?>"><i class="fas fa-<?php echo $icon; ?>"></i></div>
                                <?php endforeach; ?>
                            </div>
                            <?php endforeach; ?>
                        </div>
                        <div class="cube-badge cb-1">
                            <div class="cb-ic"><i class="fas fa-shield-halved"></i></div>
                            <div><h5>Smarter Validation</h5><p>Risk-based approach</p></div>
                        </div>
                        <div class="cube-badge cb-2">
                            <div class="cb-ic"><i class="fas fa-chart-line"></i></div>
                            <div><h5>Real-time Visibility</h5><p>Track every change</p></div>
                        </div>
                        <div class="cube-badge cb-3">
                            <div class="cb-ic"><i class="fas fa-clipboard-check"></i></div>
                            <div><h5>Inspection Ready</h5><p>Always audit-ready</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ============ MARQUEE ============ -->
    <div class="marquee" aria-hidden="true">
        <div class="marquee-track">
            <span>Pharma CSV Validation</span><span>GAMP 5</span><span>FDA 21 CFR Part 11</span><span>Data Integrity — ALCOA+</span><span>Equipment Qualification</span><span>AI Development</span><span>Software Engineering</span><span>Stall Booking Platform</span>
            <span>Pharma CSV Validation</span><span>GAMP 5</span><span>FDA 21 CFR Part 11</span><span>Data Integrity — ALCOA+</span><span>Equipment Qualification</span><span>AI Development</span><span>Software Engineering</span><span>Stall Booking Platform</span>
        </div>
    </div>

    <!-- ============ VALIDATION SPLIT ============ -->
    <section class="section bg-molecule" id="validation">
        <div class="container">
            <div class="split">
                <div class="reveal">
                    <div class="kicker">Our Flagship Practice</div>
                    <h2 class="section-title">Audit readiness. Regulatory confidence.</h2>
                    <p class="section-sub">Pharma validation is what DromoMinds is known for. Ensure data integrity, accelerate validation cycles and stay inspection-ready with our end-to-end compliance practice.</p>
                    <ul class="check-list">
                        <li><i class="fas fa-check"></i> GxP-focused compliance delivery with a risk-based GAMP 5 approach</li>
                        <li><i class="fas fa-check"></i> FDA + EU regulatory alignment — 21 CFR Part 11 and Annex 11</li>
                        <li><i class="fas fa-check"></i> Full lifecycle: URS, FS, DS, RTM through IQ / OQ / PQ</li>
                        <li><i class="fas fa-check"></i> Validation timelines reduced by up to 40% via template-driven methods</li>
                        <li><i class="fas fa-check"></i> Zero FDA 483 findings across our validation engagements</li>
                    </ul>
                    <a href="validation.php" class="btn btn-crimson">Explore Validation Practice <i class="fas fa-arrow-right"></i></a>
                </div>
                <div class="reveal reveal-d1">
                    <div class="badge-wall glow-panel">
                        <div class="badge-tile"><h4><i class="fas fa-shield-halved"></i> FDA 21 CFR Part 11</h4><p>Electronic records, signatures and audit trails.</p></div>
                        <div class="badge-tile"><h4><i class="fas fa-file-shield"></i> EU Annex 11</h4><p>Computerised systems governance and lifecycle docs.</p></div>
                        <div class="badge-tile"><h4><i class="fas fa-diagram-project"></i> GAMP 5</h4><p>Risk-based approach to compliant GxP systems.</p></div>
                        <div class="badge-tile"><h4><i class="fas fa-database"></i> ALCOA+</h4><p>Data integrity principles, end to end.</p></div>
                        <div class="badge-tile"><h4><i class="fas fa-certificate"></i> ISO 9001 / 13485</h4><p>Quality management systems certification support.</p></div>
                        <div class="badge-tile"><h4><i class="fas fa-flask"></i> GCP &amp; GLP</h4><p>Good clinical and laboratory practice adherence.</p></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ============ SERVICES ============ -->
    <section class="section section-white bg-circuit" id="services">
        <div class="container">
            <div class="section-head reveal">
                <div class="kicker">What We Do</div>
                <h2 class="section-title">Three disciplines. One team that speaks all of them.</h2>
                <p class="section-sub">Most IT firms can't speak to FDA inspectors. Most compliance consultancies can't ship software. DromoMinds does both — and designs it beautifully.</p>
            </div>
            <div class="svc-grid">
                <div class="svc-card svc-featured reveal" data-num="01">
                    <div class="svc-icon"><i class="fas fa-clipboard-check"></i></div>
                    <h3>Pharma CSV Validation</h3>
                    <p>GAMP 5 computerized system validation, data integrity and audit readiness for life sciences — our flagship practice.</p>
                    <div class="svc-tags"><span>CSV / CSA</span><span>21 CFR Part 11</span><span>ALCOA+</span><span>Audit Support</span></div>
                    <a href="validation.php" class="svc-link">Explore validation <i class="fas fa-arrow-right"></i></a>
                </div>
                <div class="svc-card reveal reveal-d1" data-num="02">
                    <div class="svc-icon"><i class="fas fa-brain"></i></div>
                    <h3>AI &amp; Machine Learning</h3>
                    <p>Custom models, NLP, computer vision and predictive analytics that move from notebook to production.</p>
                    <div class="svc-tags"><span>LLM Apps</span><span>Computer Vision</span><span>Chatbots</span><span>Forecasting</span></div>
                    <a href="services.php#ai" class="svc-link">Explore AI services <i class="fas fa-arrow-right"></i></a>
                </div>
                <div class="svc-card reveal reveal-d2" data-num="03">
                    <div class="svc-icon"><i class="fas fa-code"></i></div>
                    <h3>Software Engineering</h3>
                    <p>Web platforms, APIs and legacy modernisation built with modern stacks and shipped on schedule.</p>
                    <div class="svc-tags"><span>Web Platforms</span><span>APIs</span><span>Cloud</span><span>Modernisation</span></div>
                    <a href="services.php#software" class="svc-link">Explore engineering <i class="fas fa-arrow-right"></i></a>
                </div>
                <div class="svc-card reveal" data-num="04">
                    <div class="svc-icon"><i class="fas fa-mobile-screen"></i></div>
                    <h3>Mobile Apps</h3>
                    <p>Native iOS, Android and cross-platform apps that users keep on their home screens.</p>
                    <div class="svc-tags"><span>iOS</span><span>Android</span><span>Flutter</span><span>React Native</span></div>
                    <a href="services.php#mobile" class="svc-link">Explore mobile <i class="fas fa-arrow-right"></i></a>
                </div>
                <div class="svc-card reveal reveal-d1" data-num="05">
                    <div class="svc-icon"><i class="fas fa-pen-ruler"></i></div>
                    <h3>UI/UX Design</h3>
                    <p>Interfaces designed around real user behaviour — brand identity, product design and design systems.</p>
                    <div class="svc-tags"><span>Product Design</span><span>Branding</span><span>Design Systems</span></div>
                    <a href="services.php#design" class="svc-link">Explore design <i class="fas fa-arrow-right"></i></a>
                </div>
                <div class="svc-card reveal reveal-d2" data-num="06">
                    <div class="svc-icon"><i class="fas fa-bullhorn"></i></div>
                    <h3>Digital Marketing</h3>
                    <p>SEO, paid media and content programmes measured in pipeline, not impressions.</p>
                    <div class="svc-tags"><span>SEO</span><span>PPC</span><span>Social</span><span>Content</span></div>
                    <a href="services.php#marketing" class="svc-link">Explore marketing <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    </section>

    <!-- ============ PRODUCTS BENTO ============ -->
    <section class="section section-dark bg-neural-dark" id="products">
        <div class="container">
            <div class="section-head reveal">
                <div class="kicker">Product Suite</div>
                <h2 class="section-title">Products we've built and battle-tested.</h2>
                <p class="section-sub">Not just services — real products running in the wild, from exhibition halls to hospital wards.</p>
            </div>
            <div class="bento">
                <a href="validation.php" class="bento-card bento-8 bg-valid reveal">
                    <span class="b-tag">Flagship &middot; Life Sciences</span>
                    <i class="fas fa-vial-circle-check b-icon"></i>
                    <h3>ValidateOS — Pharma Validation Suite</h3>
                    <p>End-to-end CSV/CSA validation — Validation Master Plans, GAMP 5 risk assessments and IQ/OQ/PQ execution with full requirements traceability. Zero FDA 483 findings.</p>
                    <span class="b-cta">See the validation suite <i class="fas fa-arrow-right"></i></span>
                </a>
                <a href="products.php#capitcap" class="bento-card bento-4 bg-capit reveal reveal-d1">
                    <span class="b-tag">Featured &middot; Fintech</span>
                    <i class="fas fa-landmark b-icon"></i>
                    <h3>CapitCap</h3>
                    <p>Boutique equity crowdfunding platform connecting vetted investors with issuers raising capital.</p>
                    <span class="b-cta">Explore the project <i class="fas fa-arrow-right"></i></span>
                </a>
                <a href="products.php#mediscan" class="bento-card bento-4 bg-health reveal">
                    <span class="b-tag">Healthcare</span>
                    <i class="fas fa-heart-pulse b-icon"></i>
                    <h3>MediScan AI</h3>
                    <p>Diagnostic assistant with 95% prediction accuracy across 50+ hospitals.</p>
                    <span class="b-cta">View product <i class="fas fa-arrow-right"></i></span>
                </a>
                <a href="products.php#tradepilot" class="bento-card bento-4 bg-trade reveal reveal-d1">
                    <span class="b-tag">Fintech</span>
                    <i class="fas fa-chart-line b-icon"></i>
                    <h3>TradePilot</h3>
                    <p>Reinforcement-learning trading engine — $50M+ traded at 99.9% uptime.</p>
                    <span class="b-cta">View product <i class="fas fa-arrow-right"></i></span>
                </a>
                <a href="products.php#converseai" class="bento-card bento-4 bg-converse reveal reveal-d2">
                    <span class="b-tag">Customer Experience</span>
                    <i class="fas fa-comments b-icon"></i>
                    <h3>Converse AI</h3>
                    <p>Support chatbot in 30+ languages resolving 80% of tickets without humans.</p>
                    <span class="b-cta">View product <i class="fas fa-arrow-right"></i></span>
                </a>
                <a href="products.php#factorysense" class="bento-card bento-6 bg-factory reveal">
                    <span class="b-tag">Industry 4.0</span>
                    <i class="fas fa-industry b-icon"></i>
                    <h3>FactorySense</h3>
                    <p>Predictive maintenance and quality control that cut plant downtime by 40% through IoT and machine vision.</p>
                    <span class="b-cta">View product <i class="fas fa-arrow-right"></i></span>
                </a>
                <a href="products.php#learnloop" class="bento-card bento-6 bg-learn reveal reveal-d1">
                    <span class="b-tag">EdTech</span>
                    <i class="fas fa-graduation-cap b-icon"></i>
                    <h3>LearnLoop</h3>
                    <p>Adaptive learning platform serving 100K+ students with personalised paths and automated assessment.</p>
                    <span class="b-cta">View product <i class="fas fa-arrow-right"></i></span>
                </a>
                <a href="stall-booking.php" class="bento-card bento-12 bg-stall reveal">
                    <span class="b-tag">Events Technology</span>
                    <i class="fas fa-store b-icon"></i>
                    <h3>StallSpot — Stall Booking Platform</h3>
                    <p>Interactive floor plans, live availability and exhibitor management for expos, trade fairs and melas.</p>
                    <span class="b-cta">Try the live floor plan <i class="fas fa-arrow-right"></i></span>
                </a>
            </div>
        </div>
    </section>

    <!-- ============ STATS BAND ============ -->
    <section class="stats-band">
        <div class="container">
            <div class="grid">
                <div class="stat-b reveal"><div class="n"><span data-count="750">0</span>+</div><div class="l">Projects Completed</div></div>
                <div class="stat-b reveal reveal-d1"><div class="n"><span data-count="200">0</span>+</div><div class="l">Clients Worldwide</div></div>
                <div class="stat-b reveal reveal-d2"><div class="n"><span data-count="15">0</span>+</div><div class="l">Years of Excellence</div></div>
                <div class="stat-b reveal reveal-d3"><div class="n">Zero</div><div class="l">FDA 483 Findings</div></div>
            </div>
        </div>
    </section>

    <!-- ============ PROCESS ============ -->
    <section class="section section-white">
        <div class="container">
            <div class="section-head center reveal">
                <div class="kicker">How We Work</div>
                <h2 class="section-title">Discovery to delivery, without the drama.</h2>
            </div>
            <div class="process-row">
                <div class="process-step reveal"><h3>Discover</h3><p>We dig into your goals, users and constraints before writing a single line of code.</p></div>
                <div class="process-step reveal reveal-d1"><h3>Design</h3><p>A concrete roadmap, architecture and UI direction — agreed before build begins.</p></div>
                <div class="process-step reveal reveal-d2"><h3>Build</h3><p>Agile sprints with working software every cycle, tested and documented.</p></div>
                <div class="process-step reveal reveal-d3"><h3>Launch &amp; Grow</h3><p>Deployment, monitoring and 24/7 support — plus data to guide the next iteration.</p></div>
            </div>
        </div>
    </section>

    <!-- ============ CLIENTS ============ -->
    <section class="section-tight" id="clients">
        <div class="container">
            <div class="section-head center reveal">
                <div class="kicker">Trusted By</div>
                <h2 class="section-title">Clients who came for a project, stayed for a partner.</h2>
            </div>
            <div class="client-strip reveal">
                <div class="client-logo"><img src="dm/client/1.png" alt="Client logo" onerror="this.parentElement.style.display='none'"></div>
                <div class="client-logo"><img src="dm/client/2.png" alt="Client logo" onerror="this.parentElement.style.display='none'"></div>
                <div class="client-logo"><img src="dm/client/3.png" alt="Client logo" onerror="this.parentElement.style.display='none'"></div>
                <div class="client-logo"><img src="dm/client/4.png" alt="Client logo" onerror="this.parentElement.style.display='none'"></div>
                <div class="client-logo"><img src="dm/client/5.png" alt="Client logo" onerror="this.parentElement.style.display='none'"></div>
                <div class="client-logo"><img src="dm/client/6.png" alt="Client logo" onerror="this.parentElement.style.display='none'"></div>
                <div class="client-logo"><img src="dm/client/7.png" alt="Client logo" onerror="this.parentElement.style.display='none'"></div>
                <div class="client-logo"><img src="dm/client/8.png" alt="Client logo" onerror="this.parentElement.style.display='none'"></div>
            </div>
        </div>
    </section>

    <!-- ============ TESTIMONIALS ============ -->
    <section class="section section-dark bg-molecule-dark">
        <div class="container">
            <div class="section-head reveal">
                <div class="kicker">Testimonials</div>
                <h2 class="section-title">In their words.</h2>
            </div>
            <div class="testi-grid">
                <div class="testi-card reveal">
                    <div class="testi-stars">★★★★★</div>
                    <blockquote>"DromoMinds transformed our online presence completely. Their team delivered a stunning website that significantly increased our conversions — and the ongoing support has been exceptional."</blockquote>
                    <div class="testi-who">
                        <div class="testi-avatar">SM</div>
                        <div><h4>Sumit Mishra</h4><p>Co-Founder, ZenRays Technologies</p></div>
                    </div>
                </div>
                <div class="testi-card reveal reveal-d1">
                    <div class="testi-stars">★★★★★</div>
                    <blockquote>"They delivered our fundraising platform on time and within budget. Their technical expertise is truly impressive — working with DromoMinds was a great experience."</blockquote>
                    <div class="testi-who">
                        <div class="testi-avatar">TW</div>
                        <div><h4>T. Wolfe</h4><p>CEO, CapitCap LLP</p></div>
                    </div>
                </div>
                <div class="testi-card reveal reveal-d2">
                    <div class="testi-stars">★★★★★</div>
                    <blockquote>"We've worked with DromoMinds for over a year. They are a trusted partner who consistently delivers high-quality work. I highly recommend them for any IT project."</blockquote>
                    <div class="testi-who">
                        <div class="testi-avatar">BA</div>
                        <div><h4>B. Anam</h4><p>Proprietor, Industrial Enterprises</p></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ============ CTA ============ -->
    <section class="section">
        <div class="container">
            <div class="cta-panel reveal">
                <h2>Have an idea? A compliance gap? An empty exhibition hall?</h2>
                <p>Tell us what you're building — we'll bring the engineers, the designers and the auditors' vocabulary.</p>
                <a href="contact.php" class="btn btn-crimson">Start the Conversation <i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
    </section>

    <?php include 'footer.php'; ?>
</body>
</html>
