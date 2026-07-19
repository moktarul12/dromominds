<?php
$page = basename($_SERVER['PHP_SELF'], '.php');
function nav_active($p) {
    global $page;
    $match = is_array($p) ? in_array($page, $p, true) : $page === $p;
    return $match ? 'nav-link active' : 'nav-link';
}

/* Navigation onboarded 1:1 from dromominds.in */
$expertise_menu = [
    'Trust &amp; Compliance' => [
        ['Computer System Validation (CSV)', '/validation#capabilities'],
        ['GxP Compliance &amp; Data Integrity', '/validation#frameworks'],
        ['CQV &amp; Audit Readiness', '/validation#capabilities'],
        ['Regulatory Risk &amp; Quality Assurance', '/validation#assessment'],
        ['Validation &amp; Remediation Services', '/validation#case-studies'],
    ],
    'Quality &amp; Content Management' => [
        ['Quality Management Systems (QMS)', '/validation#capabilities'],
        ['SOP &amp; Documentation Management', '/validation#capabilities'],
        ['eQMS &amp; Document Lifecycle Control', '/validation#capabilities'],
        ['Regulatory Documentation Support', '/validation#capabilities'],
    ],
    'Workflow Automation' => [
        ['Compliant Process Automation', '/services#ai'],
        ['Workflow Optimization', '/services#ai'],
        ['Low-Code / No-Code Solutions', '/services#software'],
        ['AI-Powered Enterprise Applications', '/services#ai'],
        ['Custom Software &amp; System Integration', '/services#software'],
    ],
    'Data Insights &amp; Control' => [
        ['Integration &amp; Interoperability', '/services#software'],
        ['Business Intelligence &amp; Analytics', '/services#ai'],
        ['Digital Transformation Solutions', '/services#software'],
        ['Data Management &amp; Reporting', '/services#ai'],
        ['Enterprise System Integration', '/services#software'],
    ],
    'Training &amp; Upskilling' => [
        ['CSV and CSA Training', '/validation#training'],
        ['PLC and SCADA Training', '/validation#training'],
        ['Data Integrity &amp; ALCOA+ Training', '/validation#training'],
        ['GxP, GMP &amp; Regulatory Compliance Training', '/validation#training'],
        ['Equipment Qualification &amp; Process Validation Training', '/validation#training'],
        ['QMS, GDP and Document Validation Training', '/validation#training'],
    ],
];

$clients_menu = [
    'Domains' => [
        ['Clinical', '/validation#sectors'],
        ['Labs', '/validation#sectors'],
        ['Quality', '/validation#sectors'],
        ['Regulatory', '/validation#sectors'],
        ['Manufacturing', '/validation#sectors'],
        ['Supply Chain', '/validation#sectors'],
        ['Safety', '/validation#sectors'],
        ['Commercial', '/validation#sectors'],
        ['IT', '/services'],
    ],
    'Industries' => [
        ['Biotech', '/validation#sectors'],
        ['Pharma', '/validation#sectors'],
        ['CMO/CRO', '/validation#sectors'],
        ['Medical Device', '/validation#sectors'],
    ],
    'Delivery Models' => [
        ['Consulting', '/services'],
        ['Managed Services', '/services'],
        ['Staffing', '/services'],
    ],
];

$products_menu = [
    ['ValidateOS &mdash; Pharma Validation Suite', '/products#validateos'],
    ['CapitCap &mdash; Equity Crowdfunding', '/products#capitcap'],
    ['MediScan AI &mdash; Healthcare', '/products#mediscan'],
    ['TradePilot &mdash; Fintech', '/products#tradepilot'],
    ['Converse AI &mdash; Support Automation', '/products#converseai'],
    ['FactorySense &mdash; Industry 4.0', '/products#factorysense'],
    ['LearnLoop &mdash; EdTech', '/products#learnloop'],
    ['StallSpot &mdash; Stall Booking', '/stall-booking'],
];

$solutions_menu = [
    'AI &amp; Machine Learning' => [
        ['Custom AI Development', '/services#ai'],
        ['Natural Language Processing', '/services#ai'],
        ['Computer Vision', '/services#ai'],
        ['Predictive Analytics', '/services#ai'],
        ['AI-Powered Enterprise Apps', '/services#ai'],
    ],
    'Software Development' => [
        ['Web Platforms &amp; SaaS', '/services#software'],
        ['API Development', '/services#software'],
        ['Legacy Modernisation', '/services#software'],
        ['Cloud &amp; Integrations', '/services#software'],
        ['Custom Software', '/services#software'],
    ],
    'Digital Products' => [
        ['Mobile Apps (iOS / Android)', '/services#mobile'],
        ['UI/UX Design', '/services#design'],
        ['Digital Marketing', '/services#marketing'],
        ['Pharma CSV Validation', '/validation'],
    ],
];

$resources_menu = [
    ['Blogs', 'https://dromominds.in/blog', true],
    ['Case Studies', '/validation#case-studies', false],
    ['News &amp; Events', 'https://dromominds.in/resources/news', true],
    ['White Papers', '/validation#csa-kit', false],
    ['Videos', 'https://dromominds.in/resources/videos', true],
    ['CSV Maturity Assessment', '/validation#assessment', false],
    ['ROI Calculator', '/contact', false],
];
?>
<header class="header" id="header">
    <div class="container">
        <div class="header-inner">
            <a href="/" class="logo">
                <img src="dm/logo1.png" alt="DromoMinds Solutions">
            </a>
            <nav class="nav main-nav">
                <div class="nav-item static">
                    <a href="/validation" class="<?php echo nav_active(['validation', 'services']); ?>">Expertise <i class="fas fa-chevron-down caret"></i></a>
                    <div class="nav-mega">
                        <div class="dd-panel">
                            <div class="mega-grid">
                                <?php foreach ($expertise_menu as $group => $items): ?>
                                <div class="dd-group">
                                    <h5><?php echo $group; ?></h5>
                                    <?php foreach ($items as $it): ?>
                                    <a href="<?php echo $it[1]; ?>"><?php echo $it[0]; ?></a>
                                    <?php endforeach; ?>
                                </div>
                                <?php endforeach; ?>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="nav-item">
                    <a href="/services" class="<?php echo nav_active('services'); ?>">Solutions <i class="fas fa-chevron-down caret"></i></a>
                    <div class="nav-dd">
                        <div class="dd-panel dd-panel-wide">
                            <div class="dd-grid-3">
                                <?php foreach ($solutions_menu as $group => $items): ?>
                                <div class="dd-group">
                                    <h5><?php echo $group; ?></h5>
                                    <?php foreach ($items as $it): ?>
                                    <a href="<?php echo $it[1]; ?>"><?php echo $it[0]; ?></a>
                                    <?php endforeach; ?>
                                </div>
                                <?php endforeach; ?>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="nav-item">
                    <a href="/products" class="<?php echo nav_active(['products', 'stall-booking']); ?>">Products <i class="fas fa-chevron-down caret"></i></a>
                    <div class="nav-dd">
                        <div class="dd-panel">
                            <?php foreach ($products_menu as $it): ?>
                            <a href="<?php echo $it[1]; ?>"><?php echo $it[0]; ?></a>
                            <?php endforeach; ?>
                        </div>
                    </div>
                </div>
                <div class="nav-item">
                    <a href="/validation#sectors" class="nav-link">Our Clients <i class="fas fa-chevron-down caret"></i></a>
                    <div class="nav-dd">
                        <div class="dd-panel dd-panel-wide">
                            <div class="dd-grid-3">
                                <?php foreach ($clients_menu as $group => $items): ?>
                                <div class="dd-group">
                                    <h5><?php echo $group; ?></h5>
                                    <?php foreach ($items as $it): ?>
                                    <a href="<?php echo $it[1]; ?>"><?php echo $it[0]; ?></a>
                                    <?php endforeach; ?>
                                </div>
                                <?php endforeach; ?>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="nav-item">
                    <a href="/validation#case-studies" class="nav-link">Resources <i class="fas fa-chevron-down caret"></i></a>
                    <div class="nav-dd">
                        <div class="dd-panel">
                            <?php foreach ($resources_menu as $it): ?>
                            <a href="<?php echo $it[1]; ?>"<?php echo $it[2] ? ' target="_blank" rel="noopener"' : ''; ?>><?php echo $it[0]; ?><?php echo $it[2] ? ' <i class="fas fa-arrow-up-right-from-square ext"></i>' : ''; ?></a>
                            <?php endforeach; ?>
                        </div>
                    </div>
                </div>
                <a href="/about" class="<?php echo nav_active('about'); ?>">About Us</a>
            </nav>
            <div class="header-cta">
                <a href="/contact" class="btn btn-crimson">Talk to an Expert <i class="fas fa-arrow-right"></i></a>
                <button class="mobile-toggle" id="mobileToggle" aria-label="Menu"><i class="fas fa-bars"></i></button>
            </div>
        </div>
    </div>
</header>
<div class="mobile-menu" id="mobileMenu">
    <a href="/">Home</a>
    <h5>Solutions</h5>
    <?php foreach ($solutions_menu as $group => $items): ?>
    <span class="mm-group"><?php echo $group; ?></span>
    <?php foreach ($items as $it): ?>
    <a href="<?php echo $it[1]; ?>" class="sub"><?php echo $it[0]; ?></a>
    <?php endforeach; endforeach; ?>
    <h5>Expertise</h5>
    <?php foreach ($expertise_menu as $group => $items): ?>
    <span class="mm-group"><?php echo $group; ?></span>
    <?php foreach ($items as $it): ?>
    <a href="<?php echo $it[1]; ?>" class="sub"><?php echo $it[0]; ?></a>
    <?php endforeach; endforeach; ?>
    <h5>Products</h5>
    <?php foreach ($products_menu as $it): ?>
    <a href="<?php echo $it[1]; ?>" class="sub"><?php echo $it[0]; ?></a>
    <?php endforeach; ?>
    <h5>Our Clients</h5>
    <?php foreach ($clients_menu as $group => $items): ?>
    <span class="mm-group"><?php echo $group; ?></span>
    <?php foreach ($items as $it): ?>
    <a href="<?php echo $it[1]; ?>" class="sub"><?php echo $it[0]; ?></a>
    <?php endforeach; endforeach; ?>
    <h5>Resources</h5>
    <?php foreach ($resources_menu as $it): ?>
    <a href="<?php echo $it[1]; ?>" class="sub"<?php echo $it[2] ? ' target="_blank" rel="noopener"' : ''; ?>><?php echo $it[0]; ?></a>
    <?php endforeach; ?>
    <a href="/about">About Us</a>
    <a href="/contact">Contact</a>
</div>
