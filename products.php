<?php
$page_title = 'Products | DromoMinds Solutions';
$page_desc = 'The DromoMinds product portfolio — CapitCap equity crowdfunding, ValidateOS pharma validation, MediScan AI, TradePilot, Converse AI, FactorySense, LearnLoop and StallSpot booking.';
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
            <div class="breadcrumb"><a href="index.php">Home</a> / Products</div>
            <h1>Products built to run,<br>not just to demo.</h1>
            <p>Our portfolio spans fintech, life sciences, healthcare, manufacturing, education and events technology — including the CapitCap equity-crowdfunding platform.</p>
        </div>
    </section>

    <section class="section" id="capitcap">
        <div class="container">
            <!-- CapitCap -->
            <div class="prod-row" style="padding-top: 0;">
                <div class="prod-visual bg-capit reveal">
                    <i class="fas fa-landmark"></i>
                    <span class="pv-badge">Featured Project</span>
                </div>
                <div class="prod-body reveal reveal-d1">
                    <span class="p-tag">Fintech &amp; Equity Crowdfunding</span>
                    <h2>CapitCap — Boutique Equity Crowdfunding</h2>
                    <p>DromoMinds delivered the CapitCap digital platform to connect vetted investors with businesses and entrepreneurs raising capital. The experience makes complex fundraising workflows easier for issuers while giving investors access to offerings beyond established exchanges.</p>
                    <ul class="check-list">
                        <li><i class="fas fa-check"></i> Investor and issuer onboarding with participant verification</li>
                        <li><i class="fas fa-check"></i> Campaign and custom offering pages for Reg CF fundraising</li>
                        <li><i class="fas fa-check"></i> Investment checkout for equity, debt and convertible instruments</li>
                        <li><i class="fas fa-check"></i> Workflows supporting escrow, cap-table and SEC documentation needs</li>
                    </ul>
                    <a href="https://capitcap.com/" target="_blank" rel="noopener" class="btn btn-crimson">Visit CapitCap <i class="fas fa-arrow-up-right-from-square"></i></a>
                </div>
            </div>

            <!-- ValidateOS -->
            <div class="prod-row flip" id="validateos">
                <div class="prod-visual bg-valid reveal">
                    <i class="fas fa-vial-circle-check"></i>
                    <span class="pv-badge">Life Sciences</span>
                </div>
                <div class="prod-body reveal reveal-d1">
                    <span class="p-tag">Pharma Compliance</span>
                    <h2>ValidateOS — CSV Validation Suite</h2>
                    <p>Our validation practice, productised. ValidateOS manages the complete computerized system validation lifecycle — from Validation Master Plans and risk assessments through IQ/OQ/PQ execution — with GAMP 5 templates and full requirements traceability built in.</p>
                    <ul class="check-list">
                        <li><i class="fas fa-check"></i> URS, FS, DS and RTM documentation with automated traceability</li>
                        <li><i class="fas fa-check"></i> FDA 21 CFR Part 11 and EU Annex 11 aligned workflows</li>
                        <li><i class="fas fa-check"></i> ALCOA+ data integrity checks and audit trail review</li>
                        <li><i class="fas fa-check"></i> Cuts validation documentation time by up to 40%</li>
                    </ul>
                    <a href="validation.php" class="btn btn-ink">Explore Validation Practice <i class="fas fa-arrow-right"></i></a>
                    <div class="prod-stats">
                        <div><strong>Zero</strong><span>FDA 483 Findings</span></div>
                        <div><strong>40%</strong><span>Faster Validation</span></div>
                        <div><strong>15+</strong><span>Countries Served</span></div>
                    </div>
                </div>
            </div>

            <!-- MediScan -->
            <div class="prod-row" id="mediscan">
                <div class="prod-visual bg-health reveal">
                    <i class="fas fa-heart-pulse"></i>
                    <span class="pv-badge">Healthcare AI</span>
                </div>
                <div class="prod-body reveal reveal-d1">
                    <span class="p-tag">Healthcare</span>
                    <h2>MediScan AI — Diagnostic Assistant</h2>
                    <p>An AI-powered diagnostic assistant for medical professionals. Deep learning models analyse X-Ray, MRI and CT imagery in real time, flagging findings with 95% prediction accuracy — fully HIPAA compliant and integrated with hospital systems.</p>
                    <ul class="check-list">
                        <li><i class="fas fa-check"></i> Medical image analysis across X-Ray, MRI and CT</li>
                        <li><i class="fas fa-check"></i> Real-time disease prediction with confidence scoring</li>
                        <li><i class="fas fa-check"></i> HIPAA-compliant data handling and HL7/FHIR integration</li>
                    </ul>
                    <div class="prod-stats">
                        <div><strong>95%</strong><span>Accuracy</span></div>
                        <div><strong>50+</strong><span>Hospitals</span></div>
                        <div><strong>1M+</strong><span>Scans Analysed</span></div>
                    </div>
                </div>
            </div>

            <!-- TradePilot -->
            <div class="prod-row flip" id="tradepilot">
                <div class="prod-visual bg-trade reveal">
                    <i class="fas fa-chart-line"></i>
                    <span class="pv-badge">Fintech</span>
                </div>
                <div class="prod-body reveal reveal-d1">
                    <span class="p-tag">Finance</span>
                    <h2>TradePilot — Algorithmic Trading Engine</h2>
                    <p>A reinforcement-learning trading system that analyses markets in real time, manages risk automatically and optimises portfolios around the clock — no coffee breaks, no emotional trades.</p>
                    <ul class="check-list">
                        <li><i class="fas fa-check"></i> Real-time market data analysis and signal generation</li>
                        <li><i class="fas fa-check"></i> Built-in risk management and position sizing</li>
                        <li><i class="fas fa-check"></i> 24/7 automated execution with portfolio optimisation</li>
                    </ul>
                    <div class="prod-stats">
                        <div><strong>32%</strong><span>Avg. Returns</span></div>
                        <div><strong>$50M+</strong><span>Volume Traded</span></div>
                        <div><strong>99.9%</strong><span>Uptime</span></div>
                    </div>
                </div>
            </div>

            <!-- Converse AI -->
            <div class="prod-row" id="converseai">
                <div class="prod-visual bg-converse reveal">
                    <i class="fas fa-comments"></i>
                    <span class="pv-badge">Customer Experience</span>
                </div>
                <div class="prod-body reveal reveal-d1">
                    <span class="p-tag">Customer Service</span>
                    <h2>Converse AI — Intelligent Support</h2>
                    <p>A chatbot platform with genuine natural-language understanding. It handles support across chat and voice in 30+ languages, reads sentiment, remembers context and plugs straight into Salesforce and HubSpot.</p>
                    <ul class="check-list">
                        <li><i class="fas fa-check"></i> 30+ languages with sentiment analysis</li>
                        <li><i class="fas fa-check"></i> Context-aware conversations and smooth human handoff</li>
                        <li><i class="fas fa-check"></i> CRM integration and voice bot support</li>
                    </ul>
                    <div class="prod-stats">
                        <div><strong>80%</strong><span>Issues Auto-Resolved</span></div>
                        <div><strong>60%</strong><span>Cost Reduction</span></div>
                        <div><strong>24/7</strong><span>Availability</span></div>
                    </div>
                </div>
            </div>

            <!-- FactorySense -->
            <div class="prod-row flip" id="factorysense">
                <div class="prod-visual bg-factory reveal">
                    <i class="fas fa-industry"></i>
                    <span class="pv-badge">Industry 4.0</span>
                </div>
                <div class="prod-body reveal reveal-d1">
                    <span class="p-tag">Manufacturing</span>
                    <h2>FactorySense — Smart Manufacturing AI</h2>
                    <p>Predictive maintenance and machine-vision quality control for smart factories. FactorySense listens to your machines through IoT sensors and tells you what will break before it does.</p>
                    <ul class="check-list">
                        <li><i class="fas fa-check"></i> Predictive maintenance with failure forecasting</li>
                        <li><i class="fas fa-check"></i> Real-time vision-based quality control</li>
                        <li><i class="fas fa-check"></i> Supply chain and energy consumption analytics</li>
                    </ul>
                    <div class="prod-stats">
                        <div><strong>40%</strong><span>Downtime Reduced</span></div>
                        <div><strong>25%</strong><span>Quality Improved</span></div>
                        <div><strong>30%</strong><span>Cost Saved</span></div>
                    </div>
                </div>
            </div>

            <!-- LearnLoop -->
            <div class="prod-row" id="learnloop">
                <div class="prod-visual bg-learn reveal">
                    <i class="fas fa-graduation-cap"></i>
                    <span class="pv-badge">EdTech</span>
                </div>
                <div class="prod-body reveal reveal-d1">
                    <span class="p-tag">Education</span>
                    <h2>LearnLoop — Adaptive Learning Platform</h2>
                    <p>An adaptive learning platform that builds a personalised path for every student — AI-generated content, automated assessment and analytics that show teachers exactly where each learner stands.</p>
                    <ul class="check-list">
                        <li><i class="fas fa-check"></i> Personalised learning paths and virtual tutoring</li>
                        <li><i class="fas fa-check"></i> AI content generation and automated assessment</li>
                        <li><i class="fas fa-check"></i> Performance analytics for students and educators</li>
                    </ul>
                    <div class="prod-stats">
                        <div><strong>100K+</strong><span>Students</span></div>
                        <div><strong>60%</strong><span>Better Engagement</span></div>
                        <div><strong>40%</strong><span>Faster Learning</span></div>
                    </div>
                </div>
            </div>

            <!-- StallSpot is intentionally listed last -->
            <div class="prod-row flip" id="stallspot">
                <div class="prod-visual bg-stall reveal">
                    <i class="fas fa-store"></i>
                    <span class="pv-badge">Events Technology</span>
                </div>
                <div class="prod-body reveal reveal-d1">
                    <span class="p-tag">Events &amp; Exhibitions</span>
                    <h2>StallSpot — Stall Booking Platform</h2>
                    <p>StallSpot replaces exhibition-booking phone calls and spreadsheets with an interactive floor plan where organisers publish halls, set tiered pricing, and exhibitors select and reserve a stall in minutes.</p>
                    <ul class="check-list">
                        <li><i class="fas fa-check"></i> Interactive floor plans with live availability</li>
                        <li><i class="fas fa-check"></i> Premium, standard and economy pricing by zone</li>
                        <li><i class="fas fa-check"></i> Payment, GST invoicing and exhibitor KYC workflows</li>
                        <li><i class="fas fa-check"></i> Organiser dashboard for occupancy, revenue and check-ins</li>
                    </ul>
                    <a href="stall-booking.php" class="btn btn-crimson">Try the Live Demo <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="section" style="padding-top: 0;">
        <div class="container">
            <div class="cta-panel reveal">
                <h2>Want one of these — or something entirely new?</h2>
                <p>Every product above started as a conversation. Yours can too.</p>
                <a href="contact.php" class="btn btn-crimson">Talk to Our Team <i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
    </section>

    <?php include 'footer.php'; ?>
</body>
</html>
