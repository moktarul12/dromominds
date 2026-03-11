<footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <a href="index.php" class="logo">
                        <img src="dm/logo1.png" alt="DromoMinds" class="logo-img" style="height: 40px;">
                    </a>
                    <p>DromoMinds Solutions is a leading AI development, IT services, mobile app development, and Pharma validation company with strategic offices in Bangalore and Kolkata, India. We deliver innovative AI solutions and cutting-edge technology services that drive business growth across global markets.</p>
                    <div class="footer-social">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
                <div class="footer-col">
                    <h4 class="footer-title">Services</h4>
                    <ul class="footer-links">
                        <li><a href="services.php">AI Development</a></li>
                        <li><a href="services.php">Machine Learning</a></li>
                        <li><a href="services.php">Mobile App Development</a></li>
                        <li><a href="services.php">Web Development</a></li>
                        <li><a href="services.php">Software Development</a></li>
                        <li><a href="services.php">Digital Marketing</a></li>
                        <li><a href="services.php">Pharma CSV</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4 class="footer-title">Company</h4>
                    <ul class="footer-links">
                        <li><a href="about.php">About Us</a></li>
                        <li><a href="services.php">Services</a></li>
                        <li><a href="ai-projects.php">AI Projects</a></li>
                        <li><a href="contact.php">Contact</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4 class="footer-title">Offices</h4>
                    <ul class="footer-links">
                        <li><i class="fas fa-map-marker-alt"></i> <strong>Bangalore</strong></li>
                        <li>21 Adugodi, Koramangala</li>
                        <li>Bangalore: 560030, India</li>
                        <li><i class="fas fa-phone"></i> +91 7676607661</li>
                        <li style="margin-top: 15px;"><i class="fas fa-map-marker-alt"></i> <strong>Kolkata</strong></li>
                        <li>Salt Lake Sector V</li>
                        <li>Kolkata: 700091, India</li>
                        <li><i class="fas fa-phone"></i> +91 9876543210</li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 DromoMinds Solutions. All rights reserved. | Designed with <i class="fas fa-heart" style="color: #e74c3c;"></i> in India</p>
                <div class="footer-bottom-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Sitemap</a>
                </div>
            </div>
        </div>
    </footer>

    <script>
        window.addEventListener('scroll', function() {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        document.querySelector('form')?.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
        });
    </script>
</body>
</html>
