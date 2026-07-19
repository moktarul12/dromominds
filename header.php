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
                <img src="dm/logo.png" alt="DromoMinds Solutions">
            </a>
            <nav class="nav">
                <a href="index.php" class="<?php echo nav_active('index'); ?>">Home</a>
                <a href="services.php" class="<?php echo nav_active('services'); ?>">Services</a>
                <a href="products.php" class="<?php echo nav_active('products'); ?>">Products</a>
                <a href="validation.php" class="<?php echo nav_active('validation'); ?>">Pharma Validation</a>
                <a href="about.php" class="<?php echo nav_active('about'); ?>">About</a>
            </nav>
            <div class="header-cta">
                <a href="contact.php" class="btn btn-crimson">Let's Talk <i class="fas fa-arrow-right"></i></a>
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
