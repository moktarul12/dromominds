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
        ['Computer System Validation (CSV)', 'validation.php#capabilities'],
        ['GxP Compliance &amp; Data Integrity', 'validation.php#frameworks'],
        ['CQV &amp; Audit Readiness', 'validation.php#capabilities'],
        ['Regulatory Risk &amp; Quality Assurance', 'validation.php#assessment'],
        ['Validation &amp; Remediation Services', 'validation.php#case-studies'],
    ],
    'Quality &amp; Content Management' => [
        ['Quality Management Systems (QMS)', 'validation.php#capabilities'],
        ['SOP &amp; Documentation Management', 'validation.php#capabilities'],
        ['eQMS &amp; Document Lifecycle Control', 'validation.php#capabilities'],
        ['Regulatory Documentation Support', 'validation.php#capabilities'],
    ],
    'Workflow Automation' => [
        ['Compliant Process Automation', 'services.php#ai'],
        ['Workflow Optimization', 'services.php#ai'],
        ['Low-Code / No-Code Solutions', 'services.php#software'],
        ['AI-Powered Enterprise Applications', 'services.php#ai'],
        ['Custom Software &amp; System Integration', 'services.php#software'],
    ],
    'Data Insights &amp; Control' => [
        ['Integration &amp; Interoperability', 'services.php#software'],
        ['Business Intelligence &amp; Analytics', 'services.php#ai'],
        ['Digital Transformation Solutions', 'services.php#software'],
        ['Data Management &amp; Reporting', 'services.php#ai'],
        ['Enterprise System Integration', 'services.php#software'],
    ],
    'Training &amp; Upskilling' => [
        ['CSV and CSA Training', 'validation.php#training'],
        ['PLC and SCADA Training', 'validation.php#training'],
        ['Data Integrity &amp; ALCOA+ Training', 'validation.php#training'],
        ['GxP, GMP &amp; Regulatory Compliance Training', 'validation.php#training'],
        ['Equipment Qualification &amp; Process Validation Training', 'validation.php#training'],
        ['QMS, GDP and Document Validation Training', 'validation.php#training'],
    ],
];

$clients_menu = [
    'Domains' => [
        ['Clinical', 'validation.php#sectors'],
        ['Labs', 'validation.php#sectors'],
        ['Quality', 'validation.php#sectors'],
        ['Regulatory', 'validation.php#sectors'],
        ['Manufacturing', 'validation.php#sectors'],
        ['Supply Chain', 'validation.php#sectors'],
        ['Safety', 'validation.php#sectors'],
        ['Commercial', 'validation.php#sectors'],
        ['IT', 'services.php'],
    ],
    'Industries' => [
        ['Biotech', 'validation.php#sectors'],
        ['Pharma', 'validation.php#sectors'],
        ['CMO/CRO', 'validation.php#sectors'],
        ['Medical Device', 'validation.php#sectors'],
    ],
    'Delivery Models' => [
        ['Consulting', 'services.php'],
        ['Managed Services', 'services.php'],
        ['Staffing', 'services.php'],
    ],
];

$products_menu = [
    ['ValidateOS &mdash; Pharma Validation Suite', 'products.php#validateos'],
    ['CapitCap &mdash; Equity Crowdfunding', 'products.php#capitcap'],
    ['MediScan AI &mdash; Healthcare', 'products.php#mediscan'],
    ['TradePilot &mdash; Fintech', 'products.php#tradepilot'],
    ['Converse AI &mdash; Support Automation', 'products.php#converseai'],
    ['FactorySense &mdash; Industry 4.0', 'products.php#factorysense'],
    ['LearnLoop &mdash; EdTech', 'products.php#learnloop'],
    ['StallSpot &mdash; Stall Booking', 'stall-booking.php'],
];

$resources_menu = [
    ['Blogs', 'https://dromominds.in/blog', true],
    ['Case Studies', 'validation.php#case-studies', false],
    ['News &amp; Events', 'https://dromominds.in/resources/news', true],
    ['White Papers', 'validation.php#csa-kit', false],
    ['Videos', 'https://dromominds.in/resources/videos', true],
    ['CSV Maturity Assessment', 'validation.php#assessment', false],
    ['ROI Calculator', 'contact.php', false],
];
?>
<header class="header" id="header">
    <div class="container">
        <div class="header-inner">
            <a href="index.php" class="logo">
                <img src="dm/logo1.png" alt="DromoMinds Solutions">
            </a>
            <nav class="nav main-nav">
                <div class="nav-item static">
                    <a href="validation.php" class="<?php echo nav_active(['validation', 'services']); ?>">Expertise <i class="fas fa-chevron-down caret"></i></a>
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
                    <a href="products.php" class="<?php echo nav_active(['products', 'stall-booking']); ?>">Products <i class="fas fa-chevron-down caret"></i></a>
                    <div class="nav-dd">
                        <div class="dd-panel">
                            <?php foreach ($products_menu as $it): ?>
                            <a href="<?php echo $it[1]; ?>"><?php echo $it[0]; ?></a>
                            <?php endforeach; ?>
                        </div>
                    </div>
                </div>
                <div class="nav-item">
                    <a href="validation.php#sectors" class="nav-link">Our Clients <i class="fas fa-chevron-down caret"></i></a>
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
                    <a href="validation.php#case-studies" class="nav-link">Resources <i class="fas fa-chevron-down caret"></i></a>
                    <div class="nav-dd">
                        <div class="dd-panel">
                            <?php foreach ($resources_menu as $it): ?>
                            <a href="<?php echo $it[1]; ?>"<?php echo $it[2] ? ' target="_blank" rel="noopener"' : ''; ?>><?php echo $it[0]; ?><?php echo $it[2] ? ' <i class="fas fa-arrow-up-right-from-square ext"></i>' : ''; ?></a>
                            <?php endforeach; ?>
                        </div>
                    </div>
                </div>
                <a href="about.php" class="<?php echo nav_active('about'); ?>">About Us</a>
            </nav>
            <div class="header-cta">
                <a href="contact.php" class="btn btn-crimson">Talk to an Expert <i class="fas fa-arrow-right"></i></a>
                <button class="mobile-toggle" id="mobileToggle" aria-label="Menu"><i class="fas fa-bars"></i></button>
            </div>
        </div>
    </div>
</header>
<div class="mobile-menu" id="mobileMenu">
    <a href="index.php">Home</a>
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
    <a href="about.php">About Us</a>
    <a href="contact.php">Contact</a>
</div>
