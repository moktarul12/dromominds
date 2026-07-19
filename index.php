<?php
$page_title = 'DromoMinds | The GxP AI Suite — Intelligent Compliance. Trusted Quality.';
$page_desc = 'The AI-powered GxP platform for Pharma, Biotech, Medical Devices and Chemicals — validation, quality, documents, training and audit readiness in one suite.';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <?php include 'head.php'; ?>
</head>
<body class="home-gx">
    <?php include 'header.php'; ?>

    <main class="gx">

        <!-- ============ HERO ============ -->
        <section class="gx-hero" id="home">
            <div class="gx-stars"></div>
            <div class="gx-hero-molecules" aria-hidden="true">
                <i class="fas fa-dna m-1"></i>
                <i class="fas fa-flask m-2"></i>
                <i class="fas fa-atom m-3"></i>
                <i class="fas fa-vial m-4"></i>
                <i class="fas fa-circle-nodes m-5"></i>
            </div>
            <div class="container">
                <div class="gx-hero-grid">
                    <div class="gx-hero-copy">
                        <span class="gx-overline">AI-Powered GxP Compliance</span>
                        <h1>Intelligent Compliance.<br><span>Trusted Quality.</span></h1>
                        <p>The AI-powered GxP platform for Pharma, Biotech,<br>Medical Devices and Chemicals.</p>
                        <div class="gx-hero-stats">
                            <div><i class="fas fa-building-user"></i><p><strong><span data-count="200">0</span>+</strong><small>Global Clients</small></p></div>
                            <div><i class="fas fa-shield-halved"></i><p><strong><span data-count="98">0</span>%</strong><small>Compliance Rate</small></p></div>
                            <div><i class="fas fa-earth-asia"></i><p><strong><span data-count="53">0</span>+</strong><small>Countries</small></p></div>
                            <div><i class="fas fa-clock"></i><p><strong>24/7</strong><small>AI Monitoring</small></p></div>
                        </div>
                    </div>

                    <div class="gx-core-scene" aria-label="AI compliance core">
                        <div class="gx-core-halo"></div>
                        <div class="gx-ring ring-a"></div>
                        <div class="gx-ring ring-b"></div>
                        <div class="gx-ring ring-c"></div>
                        <div class="gx-orbit-dots od-1"><i></i><i></i><i></i><i></i></div>
                        <div class="gx-orbit-dots od-2"><i></i><i></i><i></i><i></i><i></i></div>
                        <div class="gx-chip">
                            <div class="gx-chip-pins" aria-hidden="true"></div>
                            <strong>AI</strong>
                            <small>Compliance<br>Core</small>
                        </div>
                        <?php
                        $satellites = [
                            ['pos' => 's-top',  'icon' => 'brain',                    'label' => 'AI &amp; Machine<br>Learning'],
                            ['pos' => 's-tr',   'icon' => 'award',                    'label' => 'Quality<br>Management'],
                            ['pos' => 's-r',    'icon' => 'triangle-exclamation',     'label' => 'Risk &amp; CAPA<br>Management'],
                            ['pos' => 's-br',   'icon' => 'magnifying-glass-chart',   'label' => 'Inspection<br>Readiness'],
                            ['pos' => 's-bot',  'icon' => 'graduation-cap',           'label' => 'Training &amp;<br>Competency'],
                            ['pos' => 's-bl',   'icon' => 'clipboard-check',          'label' => 'Audit<br>Management'],
                            ['pos' => 's-l',    'icon' => 'file-shield',              'label' => 'Document<br>Management'],
                            ['pos' => 's-tl',   'icon' => 'diagram-project',          'label' => 'Validation<br>Lifecycle'],
                        ];
                        foreach ($satellites as $i => $s): ?>
                        <div class="gx-sat <?php echo $s['pos']; ?>" style="--d:<?php echo $i * 0.45; ?>s">
                            <i class="fas fa-<?php echo $s['icon']; ?>"></i>
                            <span><?php echo $s['label']; ?></span>
                        </div>
                        <?php endforeach; ?>
                    </div>
                </div>

                <a href="#industries" class="gx-scroll-down">Scroll Down<i class="fas fa-chevron-down"></i></a>
            </div>
        </section>

        <!-- ============ INDUSTRIES ============ -->
        <section class="gx-section gx-light" id="industries">
            <div class="container">
                <div class="gx-head-split">
                    <div>
                        <span class="gx-kicker">Industries We Power</span>
                        <h2>Built for Regulated Industries.<br><span class="grad-blue">Designed for Excellence.</span></h2>
                    </div>
                    <p class="gx-head-note">DromoMinds empowers quality-driven organisations to achieve compliance, efficiency and operational excellence with AI.</p>
                </div>
                <?php
                $industries = [
                    ['tone' => 'blue',   'art' => 'pills',       'art2' => 'capsules',   'title' => 'Pharmaceutical',  'items' => ['21 CFR Part 11', 'EU Annex 11', 'GAMP 5'],                     'href' => '/validation'],
                    ['tone' => 'purple', 'art' => 'dna',         'art2' => 'bacterium',  'title' => 'Biotechnology',   'items' => ['Data Integrity', 'AI Validation', 'Process Controls'],         'href' => '/validation'],
                    ['tone' => 'green',  'art' => 'flask-vial',  'art2' => 'atom',       'title' => 'Chemical Industry', 'items' => ['EHS Compliance', 'Process Safety', 'Audit Ready'],           'href' => '/validation'],
                    ['tone' => 'orange', 'art' => 'heart-pulse', 'art2' => 'microchip',  'title' => 'Medical Devices', 'items' => ['ISO 13485', 'UDI Compliance', 'Design Controls'],              'href' => '/validation'],
                    ['tone' => 'teal',   'art' => 'microscope',  'art2' => 'wheat-awn',  'title' => 'Food &amp; Nutrition', 'items' => ['HACCP', 'Quality Assurance', 'Traceability'],             'href' => '/services'],
                ];
                ?>
                <div class="gx-industry-grid">
                    <?php foreach ($industries as $k => $ind): ?>
                    <a href="<?php echo $ind['href']; ?>" class="gx-ind-card tone-<?php echo $ind['tone']; ?> reveal<?php echo $k % 3 === 1 ? ' reveal-d1' : ($k % 3 === 2 ? ' reveal-d2' : ''); ?>">
                        <div class="gx-ind-art">
                            <i class="fas fa-<?php echo $ind['art']; ?> a1"></i>
                            <i class="fas fa-<?php echo $ind['art2']; ?> a2"></i>
                        </div>
                        <span class="gx-ind-badge"><i class="fas fa-<?php echo $ind['art']; ?>"></i></span>
                        <div class="gx-ind-body">
                            <h3><?php echo $ind['title']; ?></h3>
                            <ul>
                                <?php foreach ($ind['items'] as $it): ?><li><?php echo $it; ?></li><?php endforeach; ?>
                            </ul>
                            <span class="gx-ind-link">Explore <i class="fas fa-arrow-right"></i></span>
                        </div>
                    </a>
                    <?php endforeach; ?>
                </div>
            </div>
        </section>

        <!-- ============ SOFTWARE + AI ============ -->
        <section class="gx-section gx-light" id="solutions">
            <div class="container">
                <div class="gx-head-split">
                    <div>
                        <span class="gx-kicker">Software Development &amp; AI</span>
                        <h2>Build intelligent products.<br><span class="grad-blue">Ship production software.</span></h2>
                    </div>
                    <p class="gx-head-note">Beyond compliance — DromoMinds engineers AI models, modern web platforms and mobile apps that move from prototype to production on schedule.</p>
                </div>
                <div class="gx-sol-grid">
                    <a href="/services#ai" class="gx-sol-card tone-purple reveal">
                        <div class="gx-sol-icon"><i class="fas fa-brain"></i></div>
                        <h3>AI &amp; Machine Learning</h3>
                        <p>Custom models, NLP, computer vision and predictive analytics — 75+ AI projects with 95% average accuracy.</p>
                        <ul>
                            <li>LLM apps &amp; chatbots</li>
                            <li>Computer vision</li>
                            <li>Forecasting &amp; BI</li>
                        </ul>
                        <span class="gx-ind-link">Explore AI services <i class="fas fa-arrow-right"></i></span>
                    </a>
                    <a href="/services#software" class="gx-sol-card tone-blue reveal reveal-d1">
                        <div class="gx-sol-icon"><i class="fas fa-code"></i></div>
                        <h3>Software Development</h3>
                        <p>Web platforms, APIs and cloud systems built with modern stacks — from SaaS products to legacy modernisation.</p>
                        <ul>
                            <li>Web &amp; SaaS platforms</li>
                            <li>REST / GraphQL APIs</li>
                            <li>Cloud migration</li>
                        </ul>
                        <span class="gx-ind-link">Explore engineering <i class="fas fa-arrow-right"></i></span>
                    </a>
                    <a href="/services#mobile" class="gx-sol-card tone-teal reveal reveal-d2">
                        <div class="gx-sol-icon"><i class="fas fa-mobile-screen"></i></div>
                        <h3>Mobile &amp; Product Design</h3>
                        <p>Native and cross-platform apps, plus UI/UX systems that keep users on the home screen.</p>
                        <ul>
                            <li>iOS &amp; Android</li>
                            <li>Flutter / React Native</li>
                            <li>UI/UX &amp; branding</li>
                        </ul>
                        <span class="gx-ind-link">Explore mobile &amp; design <i class="fas fa-arrow-right"></i></span>
                    </a>
                </div>
            </div>
        </section>

        <!-- ============ ECOSYSTEM ============ -->
        <section class="gx-section gx-ecosystem" id="platform">
            <div class="container">
                <div class="gx-eco-grid">
                    <div class="gx-eco-copy">
                        <span class="gx-kicker">The DromoMinds Ecosystem</span>
                        <h2>One AI Platform.<br>Every Compliance Need.</h2>
                        <p>An interconnected ecosystem of powerful modules working together to ensure quality, compliance and trust.</p>
                        <a href="/products" class="gx-btn gx-btn-ghost">Explore All Modules <i class="fas fa-arrow-right"></i></a>
                    </div>

                    <div class="gx-eco-hub">
                        <div class="gx-eco-col left">
                            <div class="gx-module"><i class="fas fa-file-shield"></i><span>Document<br>Management</span></div>
                            <div class="gx-module"><i class="fas fa-diagram-project"></i><span>Validation<br>Lifecycle</span></div>
                            <div class="gx-module"><i class="fas fa-graduation-cap"></i><span>Training &amp;<br>Competency</span></div>
                            <div class="gx-module"><i class="fas fa-arrows-rotate"></i><span>Change<br>Control</span></div>
                        </div>
                        <div class="gx-eco-center">
                            <div class="gx-eco-lines" aria-hidden="true"></div>
                            <div class="gx-eco-core">
                                <div class="gx-eco-core-ring"></div>
                                <img src="dm/logo1.png" alt="DromoMinds">
                                <small>AI CORE</small>
                            </div>
                        </div>
                        <div class="gx-eco-col right">
                            <div class="gx-module"><i class="fas fa-clipboard-check"></i><span>Audit<br>Management</span></div>
                            <div class="gx-module"><i class="fas fa-arrows-spin"></i><span>CAPA<br>Management</span></div>
                            <div class="gx-module"><i class="fas fa-triangle-exclamation"></i><span>Risk<br>Management</span></div>
                            <div class="gx-module"><i class="fas fa-chart-column"></i><span>Analytics &amp;<br>Reports</span></div>
                        </div>
                    </div>

                    <div class="gx-eco-feats">
                        <div class="gx-feat"><i class="fas fa-wand-magic-sparkles"></i><span>AI-Powered<br>Insights</span></div>
                        <div class="gx-feat"><i class="fas fa-gauge-high"></i><span>Real-time<br>Compliance</span></div>
                        <div class="gx-feat"><i class="fas fa-robot"></i><span>Smart<br>Automation</span></div>
                        <div class="gx-feat"><i class="fas fa-lightbulb"></i><span>Predictive<br>Intelligence</span></div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ============ PRODUCTS ============ -->
        <section class="gx-section gx-light" id="products">
            <div class="container">
                <div class="gx-prod-grid">
                    <div class="gx-prod-copy">
                        <span class="gx-kicker">Our Products</span>
                        <h2>Powerful Products.<br><span class="grad-blue">Smarter Compliance.</span></h2>
                        <p>Next-generation GxP applications built to simplify quality and accelerate digital transformation.</p>
                        <a href="/products" class="gx-btn gx-btn-outline">View All Products <i class="fas fa-arrow-right"></i></a>
                    </div>
                    <?php
                    $suite = [
                        ['tone' => 'blue',   'name' => 'DromoQMS',      'desc' => 'AI-Powered Quality Management System',          'href' => '/products'],
                        ['tone' => 'green',  'name' => 'DromoVALIDATE', 'desc' => 'End-to-End Validation Lifecycle Management',    'href' => '/validation'],
                        ['tone' => 'purple', 'name' => 'DromoDOCS',     'desc' => 'Intelligent Document Management',               'href' => '/products'],
                        ['tone' => 'orange', 'name' => 'DromoTRAIN',    'desc' => 'Training &amp; Competency Management',          'href' => '/products'],
                        ['tone' => 'cyan',   'name' => 'DromoAUDIT',    'desc' => 'Audit &amp; Inspection Readiness',              'href' => '/products'],
                    ];
                    ?>
                    <div class="gx-suite">
                        <?php foreach ($suite as $k => $p): ?>
                        <a href="<?php echo $p['href']; ?>" class="gx-suite-card tone-<?php echo $p['tone']; ?> reveal<?php echo $k % 3 === 1 ? ' reveal-d1' : ($k % 3 === 2 ? ' reveal-d2' : ''); ?>">
                            <span class="gx-laptop">
                                <span class="gx-screen">
                                    <span class="gx-topbar"></span>
                                    <span class="gx-ui">
                                        <span class="gx-sidebar"><i></i><i></i><i></i><i></i></span>
                                        <span class="gx-panels">
                                            <span class="gx-cardlet w-70"></span>
                                            <span class="gx-cardlet w-45"></span>
                                            <span class="gx-cardlet w-60"></span>
                                            <span class="gx-chart"><i style="--h:40%"></i><i style="--h:75%"></i><i style="--h:55%"></i><i style="--h:90%"></i><i style="--h:65%"></i></span>
                                        </span>
                                    </span>
                                </span>
                                <span class="gx-base"></span>
                            </span>
                            <h3><?php echo $p['name']; ?></h3>
                            <p><?php echo $p['desc']; ?></p>
                            <span class="gx-learn">Learn More <i class="fas fa-arrow-right"></i></span>
                        </a>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>
        </section>

        <!-- ============ TRUSTED BY ============ -->
        <section class="gx-section gx-trustzone" id="clients">
            <div class="container">
                <div class="gx-trust-grid">
                    <div class="gx-trust-copy">
                        <span class="gx-kicker">Global Reach</span>
                        <h2>Trusted by Leaders<br><span class="grad-blue">Across Continents.</span></h2>
                        <p>We partner with the world's most innovative life sciences organisations to deliver unparalleled compliance and validation infrastructure — from top-tier pharma and biotech to medical device manufacturers.</p>
                        <div class="gx-regions">
                            <div class="gx-region active"><i class="fas fa-globe"></i><div><strong>Global Alliance</strong><span>53+ countries served</span></div></div>
                            <div class="gx-region"><i class="fas fa-earth-americas"></i><div><strong>North &amp; South America</strong><span>Clinical, biotech &amp; devices</span></div></div>
                            <div class="gx-region"><i class="fas fa-earth-europe"></i><div><strong>Europe &amp; Middle East</strong><span>EU GMP &amp; Annex 11 aligned</span></div></div>
                            <div class="gx-region"><i class="fas fa-earth-asia"></i><div><strong>Asia Pacific</strong><span>Manufacturing &amp; CRO hubs</span></div></div>
                        </div>
                        <div class="gx-trust-stats">
                            <div><strong>200+</strong><span>Global Clients</span></div>
                            <div><strong>98%</strong><span>Client Retention</span></div>
                            <div><strong>Zero</strong><span>Critical Findings</span></div>
                        </div>
                    </div>

                    <?php
                    $client_cols = [
                        [
                            ['Apex Clinical', 'North America', 'c1'],
                            ['GeneSys Solutions', 'North America', 'c2'],
                            ['NovaLife Health', 'South America', 'c3'],
                            ['Vanguard Dx', 'North America', 'c4'],
                            ['Helix Systems', 'North America', 'c5'],
                            ['Beacon Care', 'North America', 'c1'],
                            ['Synapse Inc', 'North America', 'c2'],
                            ['Fortress Rx', 'South America', 'c3'],
                            ['Aegis Bio', 'North America', 'c4'],
                            ['Optima Labs', 'South America', 'c5'],
                        ],
                        [
                            ['EuroPharma Ltd', 'Europe', 'c3'],
                            ['BioNordic', 'Europe', 'c4'],
                            ['MediGene', 'Europe', 'c5'],
                            ['Oasis Medical', 'Middle East', 'c1'],
                            ['MENA Biotech', 'Middle East', 'c2'],
                            ['Gulf Diagnostics', 'Middle East', 'c3'],
                            ['AlpinMed', 'Europe', 'c4'],
                            ['CryoTech EU', 'Europe', 'c5'],
                            ['Desert Bio', 'Middle East', 'c1'],
                            ['Nordic Health', 'Europe', 'c2'],
                        ],
                        [
                            ['Sakura Bio', 'Asia Pacific', 'c5'],
                            ['TechPharma', 'Asia Pacific', 'c1'],
                            ['Pacific Health', 'Asia Pacific', 'c2'],
                            ['Lotus Life', 'Asia Pacific', 'c3'],
                            ['Oriental Rx', 'Asia Pacific', 'c4'],
                            ['Aussie Bio', 'Asia Pacific', 'c5'],
                            ['Lumen Labs', 'Asia Pacific', 'c1'],
                            ['Cedar Pharm', 'Middle East', 'c2'],
                            ['Dune Health', 'Middle East', 'c3'],
                            ['Arctic Bio', 'Europe', 'c4'],
                        ],
                    ];
                    function gx_initials($name) {
                        $parts = preg_split('/\s+/', trim($name));
                        $ini = strtoupper(substr($parts[0], 0, 1));
                        if (count($parts) > 1) { $ini .= strtoupper(substr($parts[1], 0, 1)); }
                        return $ini;
                    }
                    ?>
                    <div class="gx-trust-wall" aria-label="Client organisations">
                        <?php foreach ($client_cols as $ci => $col): ?>
                        <div class="gx-t-col<?php echo $ci === 1 ? ' rev' : ''; ?>">
                            <?php for ($loop = 0; $loop < 2; $loop++): foreach ($col as $c): ?>
                            <div class="gx-t-card">
                                <span class="gx-t-avatar <?php echo $c[2]; ?>"><?php echo gx_initials($c[0]); ?></span>
                                <span class="gx-t-meta"><strong><?php echo $c[0]; ?></strong><small><?php echo $c[1]; ?></small></span>
                                <i class="fas fa-circle-check"></i>
                            </div>
                            <?php endforeach; endfor; ?>
                        </div>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>
        </section>

        <!-- ============ FOOTER ============ -->
        <footer class="gx-footer">
            <div class="gx-footer-globe" aria-hidden="true"></div>
            <div class="container">
                <div class="gx-footer-grid">
                    <div class="gx-f-brand">
                        <img src="dm/logo1.png" alt="DromoMinds Solutions">
                        <p>AI-Powered GxP Compliance Platform for Pharma, Biotech, Medical Devices, Chemicals and more.</p>
                        <div class="gx-f-social">
                            <a href="https://www.linkedin.com/company/dromominds-solutions/" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                            <a href="https://wa.me/919748386443" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
                            <a href="https://dromominds.in" target="_blank" rel="noopener" aria-label="Website"><i class="fas fa-globe"></i></a>
                            <a href="mailto:admin@dromominds.com" aria-label="Email"><i class="fas fa-envelope"></i></a>
                        </div>
                    </div>
                    <div class="gx-f-col">
                        <h4>Products</h4>
                        <ul>
                            <li><a href="/products">DromoQMS</a></li>
                            <li><a href="/validation">DromoVALIDATE</a></li>
                            <li><a href="/products">DromoDOCS</a></li>
                            <li><a href="/products">DromoTRAIN</a></li>
                            <li><a href="/products">DromoAUDIT</a></li>
                        </ul>
                    </div>
                    <div class="gx-f-col">
                        <h4>Solutions</h4>
                        <ul>
                            <li><a href="/validation">Quality Management</a></li>
                            <li><a href="/validation">Validation Management</a></li>
                            <li><a href="/validation">Document Management</a></li>
                            <li><a href="/validation">Training Management</a></li>
                            <li><a href="/validation">Audit Management</a></li>
                        </ul>
                    </div>
                    <div class="gx-f-col">
                        <h4>Resources</h4>
                        <ul>
                            <li><a href="/validation">Insights</a></li>
                            <li><a href="/validation">Whitepapers</a></li>
                            <li><a href="/validation">Case Studies</a></li>
                            <li><a href="/validation">CSA Transition Kit</a></li>
                            <li><a href="/contact">Help Center</a></li>
                        </ul>
                    </div>
                    <div class="gx-f-col">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/about">Leadership</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/products">Portfolio</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                        </ul>
                    </div>
                    <div class="gx-f-news">
                        <h4>Stay Ahead in Compliance</h4>
                        <p>Get the latest updates, insights and industry news.</p>
                        <form class="gx-news-form">
                            <input type="email" placeholder="Enter your email" required aria-label="Email address">
                            <button type="submit" aria-label="Subscribe"><i class="fas fa-arrow-right"></i></button>
                        </form>
                        <div class="gx-f-contact">
                            <p><i class="fas fa-location-dot"></i> #415 KHB Colony, Koramangala 5th Block, Bangalore 560095</p>
                            <p><i class="fas fa-location-dot"></i> 12 Alimuddin Street, Park Street, Kolkata 700016</p>
                            <p><i class="fas fa-phone"></i> +91 76766 09661</p>
                        </div>
                    </div>
                </div>
                <div class="gx-footer-bottom">
                    <p>&copy; <?php echo date('Y'); ?> DromoMinds. All rights reserved.</p>
                    <div class="gx-f-legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Use</a>
                        <a href="#">Security</a>
                    </div>
                    <p class="gx-f-tag">Designed for Compliance. Built for the Future.</p>
                </div>
            </div>
        </footer>
    </main>

    <div class="float-dock">
        <a href="https://www.linkedin.com/company/dromominds-solutions/" target="_blank" rel="noopener" class="float-btn linkedin" aria-label="DromoMinds on LinkedIn"><i class="fab fa-linkedin-in"></i></a>
        <a href="https://wa.me/919748386443?text=Hi%20DromoMinds%2C%20I%27d%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener" class="float-btn whatsapp" aria-label="Chat on WhatsApp"><i class="fab fa-whatsapp"></i></a>
    </div>
    <script src="assets/js/main.js"></script>
</body>
</html>
