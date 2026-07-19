<?php
$page = basename($_SERVER['PHP_SELF'], '.php');
function nav_active($p) {
    global $page;
    return $page === $p ? 'nav-link active' : 'nav-link';
}
?>
<header class="header" id="header">
    <div class="container">
        <div class="header-inner">
            <a href="index.php" class="logo">
                <img src="dm/logo1.png" alt="DromoMinds Solutions">
            </a>
            <?php if ($page === 'index'): ?>
            <nav class="nav home-nav">
                <a href="products.php" class="nav-link">Products <i class="fas fa-chevron-down"></i></a>
                <a href="services.php" class="nav-link">Solutions <i class="fas fa-chevron-down"></i></a>
                <a href="#industries" class="nav-link">Industries <i class="fas fa-chevron-down"></i></a>
                <a href="validation.php" class="nav-link">Resources <i class="fas fa-chevron-down"></i></a>
                <a href="about.php" class="nav-link">Company <i class="fas fa-chevron-down"></i></a>
                <a href="contact.php" class="nav-link">Pricing</a>
            </nav>
            <?php else: ?>
            <nav class="nav">
                <a href="index.php" class="<?php echo nav_active('index'); ?>">Home</a>
                <a href="services.php" class="<?php echo nav_active('services'); ?>">Services</a>
                <a href="products.php" class="<?php echo nav_active('products'); ?>">Products</a>
                <a href="validation.php" class="<?php echo nav_active('validation'); ?>">Pharma Validation</a>
                <a href="about.php" class="<?php echo nav_active('about'); ?>">About</a>
            </nav>
            <?php endif; ?>
            <div class="header-cta">
                <?php if ($page === 'index'): ?>
                <button type="button" class="gx-iconbtn" aria-label="Search"><i class="fas fa-magnifying-glass"></i></button>
                <span class="gx-lang"><i class="fas fa-globe"></i> EN <i class="fas fa-chevron-down"></i></span>
                <button type="button" class="gx-iconbtn" aria-label="Theme"><i class="fas fa-moon"></i></button>
                <a href="contact.php" class="gx-login">Login</a>
                <a href="contact.php" class="btn gx-demo">Book a Demo</a>
                <?php else: ?>
                <a href="contact.php" class="btn btn-crimson">Let's Talk <i class="fas fa-arrow-right"></i></a>
                <?php endif; ?>
                <button class="mobile-toggle" id="mobileToggle" aria-label="Menu"><i class="fas fa-bars"></i></button>
            </div>
        </div>
    </div>
</header>
<div class="mobile-menu" id="mobileMenu">
    <a href="index.php">Home</a>
    <a href="services.php">Services</a>
    <a href="products.php">Products</a>
    <a href="validation.php">Pharma Validation</a>
    <a href="about.php">About</a>
    <a href="contact.php">Contact</a>
</div>
