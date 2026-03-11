<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DromoMinds Solutions | AI Development, IT Services & Pharma Validation</title>
    <meta name="description" content="DromoMinds Solutions - Leading IT Services, AI Development, and Pharma CSV Validation company with offices in Bangalore and Kolkata. Custom software development, AI solutions, web solutions, and regulatory compliance.">
    <link rel="icon" type="image/x-icon" href="dm/favicon.ico">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --primary: #2563eb;
            --primary-dark: #1d4ed8;
            --primary-light: #3b82f6;
            --secondary: #0f172a;
            --accent: #f97316;
            --accent-light: #fb923c;
            --light: #f8fafc;
            --dark: #0f172a;
            --gray: #64748b;
            --gray-light: #e2e8f0;
            --white: #ffffff;
            --gradient: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
            --gradient-accent: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
            --shadow: 0 10px 40px rgba(0,0,0,0.1);
            --shadow-sm: 0 4px 6px rgba(0,0,0,0.05);
            --shadow-lg: 0 20px 60px rgba(0,0,0,0.15);
            --radius: 16px;
            --radius-sm: 8px;
            --radius-lg: 24px;
            --transition: all 0.3s ease;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            font-family: 'Inter', sans-serif;
            line-height: 1.7;
            color: var(--secondary);
            background: var(--white);
            overflow-x: hidden;
        }

        .container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 24px;
        }

        .header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            background: rgba(255,255,255,0.95);
            backdrop-filter: blur(20px);
            box-shadow: var(--shadow-sm);
            transition: var(--transition);
        }

        .header.scrolled {
            padding: 0;
        }

        .header-inner {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 16px 0;
        }

        .logo {
            display: flex;
            align-items: center;
            gap: 12px;
            text-decoration: none;
        }

        .logo-img {
            height: 48px;
            width: auto;
        }

        .logo-text {
            font-size: 24px;
            font-weight: 800;
            color: var(--secondary);
        }

        .logo-text span {
            color: var(--primary);
        }

        .nav {
            display: flex;
            align-items: center;
            gap: 40px;
        }

        .nav-link {
            text-decoration: none;
            color: var(--secondary);
            font-weight: 500;
            font-size: 15px;
            transition: var(--transition);
            position: relative;
        }

        .nav-link:hover {
            color: var(--primary);
        }

        .nav-link::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--primary);
            transition: var(--transition);
        }

        .nav-link:hover::after {
            width: 100%;
        }

        .btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 14px 28px;
            border-radius: var(--radius-sm);
            font-weight: 600;
            font-size: 15px;
            text-decoration: none;
            transition: var(--transition);
            cursor: pointer;
            border: none;
        }

        .btn-primary {
            background: var(--gradient);
            color: var(--white);
            box-shadow: 0 4px 14px rgba(37, 99, 235, 0.4);
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(37, 99, 235, 0.5);
        }

        .btn-outline {
            background: transparent;
            color: var(--primary);
            border: 2px solid var(--primary);
        }

        .btn-outline:hover {
            background: var(--primary);
            color: var(--white);
        }

        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            padding: 120px 0 80px;
            background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #faf5ff 100%);
            position: relative;
            overflow: hidden;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -20%;
            width: 800px;
            height: 800px;
            background: radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, transparent 70%);
            border-radius: 50%;
        }

        .hero::after {
            content: '';
            position: absolute;
            bottom: -30%;
            left: -10%;
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, rgba(249, 115, 22, 0.08) 0%, transparent 70%);
            border-radius: 50%;
        }

        .hero-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 80px;
            align-items: center;
        }

        .hero-content {
            position: relative;
            z-index: 1;
        }

        .hero-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 16px;
            background: rgba(37, 99, 235, 0.1);
            border-radius: 50px;
            font-size: 14px;
            font-weight: 600;
            color: var(--primary);
            margin-bottom: 24px;
        }

        .hero-title {
            font-size: 56px;
            font-weight: 800;
            line-height: 1.1;
            color: var(--secondary);
            margin-bottom: 24px;
        }

        .hero-title span {
            background: var(--gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .hero-desc {
            font-size: 18px;
            color: var(--gray);
            margin-bottom: 32px;
            max-width: 500px;
        }

        .hero-buttons {
            display: flex;
            gap: 16px;
            margin-bottom: 48px;
        }

        .hero-stats {
            display: flex;
            gap: 48px;
        }

        .stat-item {
            text-align: left;
        }

        .stat-number {
            font-size: 40px;
            font-weight: 800;
            color: var(--secondary);
            line-height: 1;
        }

        .stat-number span {
            color: var(--primary);
        }

        .stat-label {
            font-size: 14px;
            color: var(--gray);
            margin-top: 4px;
        }

        .hero-visual {
            position: relative;
            z-index: 1;
        }

        .hero-image {
            width: 100%;
            height: auto;
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-lg);
        }

        .hero-card {
            position: absolute;
            background: var(--white);
            padding: 20px 24px;
            border-radius: var(--radius);
            box-shadow: var(--shadow);
            display: flex;
            align-items: center;
            gap: 16px;
            animation: float 3s ease-in-out infinite;
        }

        .hero-card-1 {
            bottom: 40px;
            left: -40px;
        }

        .hero-card-2 {
            top: 60px;
            right: -30px;
            animation-delay: 1.5s;
        }

        .hero-card-icon {
            width: 48px;
            height: 48px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
        }

        .hero-card-icon.blue {
            background: rgba(37, 99, 235, 0.1);
            color: var(--primary);
        }

        .hero-card-icon.orange {
            background: rgba(249, 115, 22, 0.1);
            color: var(--accent);
        }

        .hero-card-text h4 {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 2px;
        }

        .hero-card-text p {
            font-size: 13px;
            color: var(--gray);
        }

        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        .section {
            padding: 100px 0;
        }

        .section-light {
            background: var(--light);
        }

        .section-header {
            text-align: center;
            max-width: 700px;
            margin: 0 auto 60px;
        }

        .section-tag {
            display: inline-block;
            padding: 8px 20px;
            background: rgba(37, 99, 235, 0.1);
            color: var(--primary);
            font-size: 14px;
            font-weight: 600;
            border-radius: 50px;
            margin-bottom: 16px;
        }

        .section-title {
            font-size: 42px;
            font-weight: 800;
            color: var(--secondary);
            margin-bottom: 16px;
        }

        .section-desc {
            font-size: 17px;
            color: var(--gray);
        }

        .services-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
        }

        .service-card {
            background: var(--white);
            padding: 40px 32px;
            border-radius: var(--radius);
            box-shadow: var(--shadow-sm);
            transition: var(--transition);
            position: relative;
            overflow: hidden;
        }

        .service-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: var(--gradient);
            transform: scaleX(0);
            transition: var(--transition);
        }

        .service-card:hover {
            transform: translateY(-8px);
            box-shadow: var(--shadow);
        }

        .service-card:hover::before {
            transform: scaleX(1);
        }

        .service-icon {
            width: 72px;
            height: 72px;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 28px;
            margin-bottom: 24px;
        }

        .service-icon.blue { background: rgba(37, 99, 235, 0.1); color: var(--primary); }
        .service-icon.purple { background: rgba(124, 58, 237, 0.1); color: #7c3aed; }
        .service-icon.orange { background: rgba(249, 115, 22, 0.1); color: var(--accent); }
        .service-icon.green { background: rgba(16, 185, 129, 0.1); color: #10b981; }
        .service-icon.pink { background: rgba(236, 72, 153, 0.1); color: #ec4899; }
        .service-icon.teal { background: rgba(20, 184, 166, 0.1); color: #14b8a6; }

        .service-title {
            font-size: 22px;
            font-weight: 700;
            margin-bottom: 12px;
            color: var(--secondary);
        }

        .service-desc {
            color: var(--gray);
            font-size: 15px;
            margin-bottom: 20px;
        }

        .service-list {
            list-style: none;
        }

        .service-list li {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 14px;
            color: var(--gray);
            margin-bottom: 8px;
        }

        .service-list li i {
            color: var(--primary);
            font-size: 12px;
        }

        .about-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 80px;
            align-items: center;
        }

        .about-image {
            position: relative;
        }

        .about-img-main {
            width: 100%;
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow);
        }

        .about-img-float {
            position: absolute;
            bottom: -30px;
            right: -30px;
            background: var(--white);
            padding: 24px;
            border-radius: var(--radius);
            box-shadow: var(--shadow);
            max-width: 200px;
        }

        .about-img-float h4 {
            font-size: 32px;
            font-weight: 800;
            color: var(--primary);
        }

        .about-img-float p {
            font-size: 14px;
            color: var(--gray);
        }

        .about-content h2 {
            font-size: 42px;
            font-weight: 800;
            margin-bottom: 20px;
            color: var(--secondary);
        }

        .about-content h2 span {
            color: var(--primary);
        }

        .about-content > p {
            font-size: 17px;
            color: var(--gray);
            margin-bottom: 32px;
        }

        .about-features {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 32px;
        }

        .about-feature {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .about-feature-icon {
            width: 40px;
            height: 40px;
            border-radius: 10px;
            background: rgba(37, 99, 235, 0.1);
            color: var(--primary);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }

        .about-feature span {
            font-weight: 500;
            color: var(--secondary);
        }

        .stats-section {
            background: var(--gradient);
            padding: 80px 0;
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 40px;
        }

        .stat-card {
            text-align: center;
        }

        .stat-card-icon {
            width: 64px;
            height: 64px;
            background: rgba(255,255,255,0.2);
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            color: var(--white);
            margin: 0 auto 16px;
        }

        .stat-card-number {
            font-size: 48px;
            font-weight: 800;
            color: var(--white);
            line-height: 1;
        }

        .stat-card-label {
            font-size: 16px;
            color: rgba(255,255,255,0.8);
            margin-top: 8px;
        }

        .clients-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
        }

        .client-card {
            background: var(--white);
            padding: 32px;
            border-radius: var(--radius);
            box-shadow: var(--shadow-sm);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: var(--transition);
            border: 1px solid var(--gray-light);
        }

        .client-card:hover {
            transform: translateY(-4px);
            box-shadow: var(--shadow);
            border-color: var(--primary);
        }

        .client-card img {
            max-width: 140px;
            height: auto;
            filter: grayscale(100%);
            opacity: 0.7;
            transition: var(--transition);
        }

        .client-card:hover img {
            filter: grayscale(0);
            opacity: 1;
        }

        .process-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 32px;
        }

        .process-card {
            text-align: center;
            position: relative;
        }

        .process-card:not(:last-child)::after {
            content: '';
            position: absolute;
            top: 40px;
            right: -20px;
            width: 40px;
            height: 2px;
            background: var(--gray-light);
        }

        .process-icon {
            width: 80px;
            height: 80px;
            background: var(--white);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 28px;
            color: var(--primary);
            margin: 0 auto 20px;
            box-shadow: var(--shadow-sm);
            position: relative;
            z-index: 1;
        }

        .process-number {
            position: absolute;
            top: -8px;
            right: -8px;
            width: 28px;
            height: 28px;
            background: var(--accent);
            color: var(--white);
            border-radius: 50%;
            font-size: 14px;
            font-weight: 700;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .process-title {
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 12px;
            color: var(--secondary);
        }

        .process-desc {
            font-size: 15px;
            color: var(--gray);
        }

        .testimonials-section {
            background: var(--secondary);
            position: relative;
            overflow: hidden;
        }

        .testimonials-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .testimonials-section .section-tag {
            background: rgba(255,255,255,0.1);
            color: var(--white);
        }

        .testimonials-section .section-title {
            color: var(--white);
        }

        .testimonials-section .section-desc {
            color: rgba(255,255,255,0.7);
        }

        .testimonials-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
        }

        .testimonial-card {
            background: rgba(255,255,255,0.05);
            backdrop-filter: blur(10px);
            padding: 40px;
            border-radius: var(--radius);
            border: 1px solid rgba(255,255,255,0.1);
        }

        .testimonial-quote {
            font-size: 48px;
            color: var(--primary);
            line-height: 1;
            margin-bottom: 20px;
        }

        .testimonial-text {
            color: rgba(255,255,255,0.8);
            font-size: 16px;
            margin-bottom: 24px;
            line-height: 1.8;
        }

        .testimonial-author {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .testimonial-avatar {
            width: 56px;
            height: 56px;
            border-radius: 50%;
            background: var(--gradient);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            font-weight: 700;
            color: var(--white);
        }

        .testimonial-info h4 {
            color: var(--white);
            font-weight: 600;
            margin-bottom: 4px;
        }

        .testimonial-info p {
            color: rgba(255,255,255,0.6);
            font-size: 14px;
        }

        .contact-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            background: var(--white);
            border-radius: var(--radius-lg);
            overflow: hidden;
            box-shadow: var(--shadow);
        }

        .contact-info {
            background: var(--gradient);
            padding: 60px;
            color: var(--white);
        }

        .contact-info h3 {
            font-size: 32px;
            font-weight: 800;
            margin-bottom: 16px;
        }

        .contact-info > p {
            opacity: 0.9;
            margin-bottom: 40px;
        }

        .contact-items {
            display: flex;
            flex-direction: column;
            gap: 24px;
        }

        .contact-item {
            display: flex;
            align-items: flex-start;
            gap: 16px;
        }

        .contact-item-icon {
            width: 48px;
            height: 48px;
            background: rgba(255,255,255,0.2);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }

        .contact-item-text h4 {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 4px;
        }

        .contact-item-text p {
            opacity: 0.9;
            font-size: 15px;
        }

        .contact-form-section {
            padding: 60px;
        }

        .contact-form-section h3 {
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 32px;
            color: var(--secondary);
        }

        .form-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-group.full {
            grid-column: 1 / -1;
        }

        .form-input {
            width: 100%;
            padding: 16px 20px;
            border: 2px solid var(--gray-light);
            border-radius: var(--radius-sm);
            font-size: 15px;
            font-family: inherit;
            transition: var(--transition);
            background: var(--white);
        }

        .form-input:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
        }

        .form-input::placeholder {
            color: var(--gray);
        }

        textarea.form-input {
            min-height: 140px;
            resize: vertical;
        }

        .footer {
            background: var(--secondary);
            color: var(--white);
            padding: 80px 0 0;
        }

        .footer-grid {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 1fr;
            gap: 60px;
            padding-bottom: 60px;
            border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .footer-brand p {
            color: rgba(255,255,255,0.7);
            margin: 20px 0;
            font-size: 15px;
        }

        .footer-social {
            display: flex;
            gap: 12px;
        }

        .footer-social a {
            width: 44px;
            height: 44px;
            background: rgba(255,255,255,0.1);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--white);
            text-decoration: none;
            transition: var(--transition);
        }

        .footer-social a:hover {
            background: var(--primary);
            transform: translateY(-4px);
        }

        .footer-title {
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 24px;
        }

        .footer-links {
            list-style: none;
        }

        .footer-links li {
            margin-bottom: 12px;
        }

        .footer-links a {
            color: rgba(255,255,255,0.7);
            text-decoration: none;
            font-size: 15px;
            transition: var(--transition);
        }

        .footer-links a:hover {
            color: var(--white);
            padding-left: 8px;
        }

        .footer-bottom {
            padding: 24px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .footer-bottom p {
            color: rgba(255,255,255,0.6);
            font-size: 14px;
        }

        .footer-bottom-links {
            display: flex;
            gap: 24px;
        }

        .footer-bottom-links a {
            color: rgba(255,255,255,0.6);
            text-decoration: none;
            font-size: 14px;
            transition: var(--transition);
        }

        .footer-bottom-links a:hover {
            color: var(--white);
        }

        .mobile-toggle {
            display: none;
            background: none;
            border: none;
            font-size: 24px;
            color: var(--secondary);
            cursor: pointer;
        }

        @media (max-width: 1024px) {
            .hero-grid { grid-template-columns: 1fr; gap: 60px; }
            .hero-title { font-size: 42px; }
            .services-grid { grid-template-columns: repeat(2, 1fr); }
            .about-grid { grid-template-columns: 1fr; gap: 40px; }
            .stats-grid { grid-template-columns: repeat(2, 1fr); }
            .clients-grid { grid-template-columns: repeat(3, 1fr); }
            .process-grid { grid-template-columns: repeat(2, 1fr); }
            .process-card:not(:last-child)::after { display: none; }
            .testimonials-grid { grid-template-columns: 1fr; }
            .contact-grid { grid-template-columns: 1fr; }
            .footer-grid { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 768px) {
            .nav { display: none; }
            .mobile-toggle { display: block; }
            .hero { padding: 100px 0 60px; }
            .hero-title { font-size: 32px; }
            .hero-desc { font-size: 16px; }
            .hero-buttons { flex-direction: column; }
            .hero-stats { flex-wrap: wrap; gap: 24px; }
            .section { padding: 60px 0; }
            .section-title { font-size: 28px; }
            .services-grid { grid-template-columns: 1fr; }
            .stats-grid { grid-template-columns: 1fr 1fr; gap: 24px; }
            .stat-card-number { font-size: 36px; }
            .clients-grid { grid-template-columns: repeat(2, 1fr); }
            .process-grid { grid-template-columns: 1fr; }
            .about-features { grid-template-columns: 1fr; }
            .form-grid { grid-template-columns: 1fr; }
            .footer-grid { grid-template-columns: 1fr; gap: 40px; }
            .footer-bottom { flex-direction: column; gap: 16px; text-align: center; }
        }
    </style>
</head>
<body>
    <header class="header" id="header">
        <div class="container">
            <div class="header-inner">
                <a href="/" class="logo">
                    <img src="dm/logo.png" alt="DromoMinds" class="logo-img">
                </a>
                <nav class="nav">
                    <a href="#home" class="nav-link">Home</a>
                    <a href="#about" class="nav-link">About</a>
                    <a href="#services" class="nav-link">Services</a>
                    <a href="#ai-projects" class="nav-link">AI Projects</a>
                    <a href="#clients" class="nav-link">Clients</a>
                    <a href="#contact" class="nav-link">Contact</a>
                </nav>
                <a href="#contact" class="btn btn-primary">Get Started <i class="fas fa-arrow-right"></i></a>
                <button class="mobile-toggle"><i class="fas fa-bars"></i></button>
            </div>
        </div>
    </header>

    <section class="hero" id="home">
        <div class="container">
            <div class="hero-grid">
                <div class="hero-content">
                    <div class="hero-badge">
                        <i class="fas fa-rocket"></i> Global Presence: Bangalore & Kolkata | 500+ AI & IT Projects Delivered
                    </div>
                    <h1 class="hero-title">
                        Empowering Business Growth Through <span>AI Innovation</span>, <span>IT Excellence</span> & <span>Global Reach</span>
                    </h1>
                    <p class="hero-desc">
                        DromoMinds delivers cutting-edge AI solutions, IT services, and Pharma validation services from our strategic locations in Bangalore and Kolkata. From custom AI development to regulatory compliance, we transform your business vision into reality with innovation at scale.
                    </p>
                    <div class="hero-buttons">
                        <a href="#contact" class="btn btn-primary">Start Your Project <i class="fas fa-arrow-right"></i></a>
                        <a href="#services" class="btn btn-outline">Explore Services</a>
                    </div>
                    <div class="hero-stats">
                        <div class="stat-item">
                            <div class="stat-number">75<span>+</span></div>
                            <div class="stat-label">AI Projects Delivered</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">200<span>+</span></div>
                            <div class="stat-label">Happy Clients</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">750<span>+</span></div>
                            <div class="stat-label">Total Projects</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">2<span></span></div>
                            <div class="stat-label">Office Locations</div>
                        </div>
                    </div>
                </div>
                <div class="hero-visual">
                    <img src="dm/hero-image.png" alt="DromoMinds Solutions" class="hero-image" onerror="this.style.display='none'">
                    <div class="hero-card hero-card-1">
                        <div class="hero-card-icon blue">
                            <i class="fas fa-code"></i>
                        </div>
                        <div class="hero-card-text">
                            <h4>500+</h4>
                            <p>Projects Delivered</p>
                        </div>
                    </div>
                    <div class="hero-card hero-card-2">
                        <div class="hero-card-icon orange">
                            <i class="fas fa-award"></i>
                        </div>
                        <div class="hero-card-text">
                            <h4>ISO 9001</h4>
                            <p>Certified Company</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section section-light" id="services">
        <div class="container">
            <div class="section-header">
                <span class="section-tag">Our Services</span>
                <h2 class="section-title">Comprehensive AI, IT & Pharma Solutions</h2>
                <p class="section-desc">We deliver end-to-end AI development, IT services, and Pharma validation solutions from our strategic offices in Bangalore and Kolkata, tailored to meet your unique business requirements.</p>
            </div>
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon blue">
                        <i class="fas fa-brain"></i>
                    </div>
                    <h3 class="service-title">AI & Machine Learning</h3>
                    <p class="service-desc">Advanced AI solutions powered by machine learning, deep learning, and neural networks to transform your business operations.</p>
                    <ul class="service-list">
                        <li><i class="fas fa-check"></i> Custom AI Model Development</li>
                        <li><i class="fas fa-check"></i> Natural Language Processing</li>
                        <li><i class="fas fa-check"></i> Computer Vision Solutions</li>
                        <li><i class="fas fa-check"></i> Predictive Analytics</li>
                        <li><i class="fas fa-check"></i> AI Integration Services</li>
                        <li><i class="fas fa-check"></i> Chatbot Development</li>
                    </ul>
                </div>
                <div class="service-card">
                    <div class="service-icon purple">
                        <i class="fas fa-cogs"></i>
                    </div>
                    <h3 class="service-title">Software Development</h3>
                    <p class="service-desc">Tailored software solutions built with modern technologies to solve complex business challenges.</p>
                    <ul class="service-list">
                        <li><i class="fas fa-check"></i> Custom Software Development</li>
                        <li><i class="fas fa-check"></i> Mobile App Development</li>
                        <li><i class="fas fa-check"></i> API Development</li>
                        <li><i class="fas fa-check"></i> Legacy Modernization</li>
                    </ul>
                </div>
                <div class="service-card">
                    <div class="service-icon orange">
                        <i class="fas fa-mobile-alt"></i>
                    </div>
                    <h3 class="service-title">Mobile Apps</h3>
                    <p class="service-desc">Native and cross-platform mobile applications that engage users and enhance brand presence.</p>
                    <ul class="service-list">
                        <li><i class="fas fa-check"></i> iOS Development</li>
                        <li><i class="fas fa-check"></i> Android Development</li>
                        <li><i class="fas fa-check"></i> React Native Apps</li>
                        <li><i class="fas fa-check"></i> Flutter Development</li>
                    </ul>
                </div>
                <div class="service-card">
                    <div class="service-icon green">
                        <i class="fas fa-palette"></i>
                    </div>
                    <h3 class="service-title">UI/UX Design</h3>
                    <p class="service-desc">Beautiful, intuitive designs that create memorable digital experiences for your users.</p>
                    <ul class="service-list">
                        <li><i class="fas fa-check"></i> Website Design</li>
                        <li><i class="fas fa-check"></i> Mobile App Design</li>
                        <li><i class="fas fa-check"></i> Brand Identity</li>
                        <li><i class="fas fa-check"></i> UI/UX Consulting</li>
                    </ul>
                </div>
                <div class="service-card">
                    <div class="service-icon pink">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <h3 class="service-title">Digital Marketing</h3>
                    <p class="service-desc">Data-driven marketing strategies to boost your online presence and generate quality leads.</p>
                    <ul class="service-list">
                        <li><i class="fas fa-check"></i> SEO Services</li>
                        <li><i class="fas fa-check"></i> PPC Advertising</li>
                        <li><i class="fas fa-check"></i> Social Media Marketing</li>
                        <li><i class="fas fa-check"></i> Content Marketing</li>
                    </ul>
                </div>
                <div class="service-card">
                    <div class="service-icon teal">
                        <i class="fas fa-clipboard-check"></i>
                    </div>
                    <h3 class="service-title">Pharma CSV</h3>
                    <p class="service-desc">Computer System Validation services ensuring regulatory compliance for pharmaceutical companies.</p>
                    <ul class="service-list">
                        <li><i class="fas fa-check"></i> CSV Validation</li>
                        <li><i class="fas fa-check"></i> GxP Compliance</li>
                        <li><i class="fas fa-check"></i> Risk Assessment</li>
                        <li><i class="fas fa-check"></i> Audit Support</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section class="section" id="about">
        <div class="container">
            <div class="about-grid">
                <div class="about-image">
                    <img src="dm/about-us.png" alt="About DromoMinds" class="about-img-main" onerror="this.src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600'">
                    <div class="about-img-float">
                        <h4>15+</h4>
                        <p>Years of Excellence</p>
                    </div>
                </div>
                <div class="about-content">
                    <h2>Driving Digital Transformation with <span>AI Innovation</span> & <span>Global Expertise</span></h2>
                    <p>DromoMinds Solutions is a technology company with strategic offices in Bangalore (Silicon Valley of India) and Kolkata (Eastern India's IT hub). We specialize in AI development, IT services, and Pharma validation, combining cutting-edge technology with deep industry knowledge to deliver solutions that create real business value across global markets.</p>
                    <div class="about-features">
                        <div class="about-feature">
                            <div class="about-feature-icon"><i class="fas fa-check"></i></div>
                            <span>Expert Development Team</span>
                        </div>
                        <div class="about-feature">
                            <div class="about-feature-icon"><i class="fas fa-check"></i></div>
                            <span>Agile Methodology</span>
                        </div>
                        <div class="about-feature">
                            <div class="about-feature-icon"><i class="fas fa-check"></i></div>
                            <span>On-Time Delivery</span>
                        </div>
                        <div class="about-feature">
                            <div class="about-feature-icon"><i class="fas fa-check"></i></div>
                            <span>24/7 Support</span>
                        </div>
                    </div>
                    <a href="#contact" class="btn btn-primary">Learn More <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    </section>

    <section class="stats-section">
        <div class="container">
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-card-icon"><i class="fas fa-brain"></i></div>
                    <div class="stat-card-number">75+</div>
                    <div class="stat-card-label">AI Projects Delivered</div>
                </div>
                <div class="stat-card">
                    <div class="stat-card-icon"><i class="fas fa-users"></i></div>
                    <div class="stat-card-number">200+</div>
                    <div class="stat-card-label">Happy Clients</div>
                </div>
                <div class="stat-card">
                    <div class="stat-card-icon"><i class="fas fa-project-diagram"></i></div>
                    <div class="stat-card-number">750+</div>
                    <div class="stat-card-label">Projects Completed</div>
                </div>
                <div class="stat-card">
                    <div class="stat-card-icon"><i class="fas fa-map-marker-alt"></i></div>
                    <div class="stat-card-number">2</div>
                    <div class="stat-card-label">Strategic Locations</div>
                </div>
            </div>
        </div>
    </section>

    <section class="section section-light">
        <div class="container">
            <div class="section-header">
                <span class="section-tag">Our Process</span>
                <h2 class="section-title">How We Work</h2>
                <p class="section-desc">A proven methodology that ensures successful project delivery every time.</p>
            </div>
            <div class="process-grid">
                <div class="process-card">
                    <div class="process-icon">
                        <span class="process-number">1</span>
                        <i class="fas fa-lightbulb"></i>
                    </div>
                    <h3 class="process-title">Discovery</h3>
                    <p class="process-desc">We analyze your requirements and understand your business goals thoroughly.</p>
                </div>
                <div class="process-card">
                    <div class="process-icon">
                        <span class="process-number">2</span>
                        <i class="fas fa-pencil-ruler"></i>
                    </div>
                    <h3 class="process-title">Planning</h3>
                    <p class="process-desc">We create a detailed roadmap and strategy for successful implementation.</p>
                </div>
                <div class="process-card">
                    <div class="process-icon">
                        <span class="process-number">3</span>
                        <i class="fas fa-code"></i>
                    </div>
                    <h3 class="process-title">Development</h3>
                    <p class="process-desc">Our expert team builds your solution using cutting-edge technologies.</p>
                </div>
                <div class="process-card">
                    <div class="process-icon">
                        <span class="process-number">4</span>
                        <i class="fas fa-rocket"></i>
                    </div>
                    <h3 class="process-title">Delivery</h3>
                    <p class="process-desc">We deploy your solution and provide ongoing support and maintenance.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- AI Projects Section -->
    <section class="section" id="ai-projects">
        <div class="container">
            <div class="section-header">
                <span class="section-tag">AI Projects</span>
                <h2 class="section-title">Cutting-Edge AI Solutions</h2>
                <p class="section-desc">Explore our portfolio of innovative AI projects that are transforming businesses across industries.</p>
            </div>
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon blue">
                        <i class="fas fa-robot"></i>
                    </div>
                    <h3 class="service-title">Healthcare AI Assistant</h3>
                    <p class="service-desc">AI-powered diagnostic assistant for medical professionals with 95% accuracy in disease prediction.</p>
                    <ul class="service-list">
                        <li><i class="fas fa-check"></i> Deep Learning Models</li>
                        <li><i class="fas fa-check"></i> Medical Image Analysis</li>
                        <li><i class="fas fa-check"></i> Real-time Diagnosis</li>
                        <li><i class="fas fa-check"></i> HIPAA Compliant</li>
                    </ul>
                </div>
                <div class="service-card">
                    <div class="service-icon purple">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <h3 class="service-title">Financial Trading Bot</h3>
                    <p class="service-desc">Algorithmic trading system using reinforcement learning for automated investment decisions.</p>
                    <ul class="service-list">
                        <li><i class="fas fa-check"></i> Real-time Market Analysis</li>
                        <li><i class="fas fa-check"></i> Risk Management</li>
                        <li><i class="fas fa-check"></i> Portfolio Optimization</li>
                        <li><i class="fas fa-check"></i> 24/7 Trading</li>
                    </ul>
                </div>
                <div class="service-card">
                    <div class="service-icon orange">
                        <i class="fas fa-comments"></i>
                    </div>
                    <h3 class="service-title">Customer Service AI</h3>
                    <p class="service-desc">Intelligent chatbot system with natural language understanding for enhanced customer support.</p>
                    <ul class="service-list">
                        <li><i class="fas fa-check"></i> Multi-language Support</li>
                        <li><i class="fas fa-check"></i> Sentiment Analysis</li>
                        <li><i class="fas fa-check"></i> Context Awareness</li>
                        <li><i class="fas fa-check"></i> CRM Integration</li>
                    </ul>
                </div>
                <div class="service-card">
                    <div class="service-icon green">
                        <i class="fas fa-industry"></i>
                    </div>
                    <h3 class="service-title">Manufacturing AI</h3>
                    <p class="service-desc">Predictive maintenance and quality control system for smart manufacturing facilities.</p>
                    <ul class="service-list">
                        <li><i class="fas fa-check"></i> Predictive Maintenance</li>
                        <li><i class="fas fa-check"></i> Quality Control</li>
                        <li><i class="fas fa-check"></i> Supply Chain Optimization</li>
                        <li><i class="fas fa-check"></i> IoT Integration</li>
                    </ul>
                </div>
                <div class="service-card">
                    <div class="service-icon pink">
                        <i class="fas fa-shopping-cart"></i>
                    </div>
                    <h3 class="service-title">E-commerce AI</h3>
                    <p class="service-desc">Personalized recommendation engine and inventory optimization for online retail platforms.</p>
                    <ul class="service-list">
                        <li><i class="fas fa-check"></i> Product Recommendations</li>
                        <li><i class="fas fa-check"></i> Demand Forecasting</li>
                        <li><i class="fas fa-check"></i> Price Optimization</li>
                        <li><i class="fas fa-check"></i> Customer Segmentation</li>
                    </ul>
                </div>
                <div class="service-card">
                    <div class="service-icon teal">
                        <i class="fas fa-graduation-cap"></i>
                    </div>
                    <h3 class="service-title">EdTech AI Platform</h3>
                    <p class="service-desc">Adaptive learning platform with personalized content delivery and progress tracking.</p>
                    <ul class="service-list">
                        <li><i class="fas fa-check"></i> Personalized Learning</li>
                        <li><i class="fas fa-check"></i> Performance Analytics</li>
                        <li><i class="fas fa-check"></i> Content Generation</li>
                        <li><i class="fas fa-check"></i> Assessment Automation</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section class="section" id="clients">
        <div class="container">
            <div class="section-header">
                <span class="section-tag">Our Clients</span>
                <h2 class="section-title">Trusted by Industry Leaders</h2>
                <p class="section-desc">We've had the privilege of working with amazing clients across various industries.</p>
            </div>
            <div class="clients-grid">
                <div class="client-card"><img src="dm/client/1.png" alt="Client" onerror="this.style.display='none'"></div>
                <div class="client-card"><img src="dm/client/2.png" alt="Client" onerror="this.style.display='none'"></div>
                <div class="client-card"><img src="dm/client/3.png" alt="Client" onerror="this.style.display='none'"></div>
                <div class="client-card"><img src="dm/client/4.png" alt="Client" onerror="this.style.display='none'"></div>
                <div class="client-card"><img src="dm/client/5.png" alt="Client" onerror="this.style.display='none'"></div>
                <div class="client-card"><img src="dm/client/6.png" alt="Client" onerror="this.style.display='none'"></div>
                <div class="client-card"><img src="dm/client/7.png" alt="Client" onerror="this.style.display='none'"></div>
                <div class="client-card"><img src="dm/client/4.png" alt="Client" onerror="this.style.display='none'"></div>
            </div>
        </div>
    </section>

    <section class="section testimonials-section">
        <div class="container">
            <div class="section-header">
                <span class="section-tag">Testimonials</span>
                <h2 class="section-title">What Our Clients Say</h2>
                <p class="section-desc">Don't just take our word for it - hear from our satisfied clients.</p>
            </div>
            <div class="testimonials-grid">
                <div class="testimonial-card">
                    <div class="testimonial-quote">"</div>
                    <p class="testimonial-text">DromoMinds transformed our online presence completely. Their team delivered a stunning website that has significantly increased our conversions. The ongoing support has been exceptional.</p>
                    <div class="testimonial-author">
                        <div class="testimonial-avatar">SM</div>
                        <div class="testimonial-info">
                            <h4>Sumit Mishra</h4>
                            <p>Co-Founder, ZenRays Technologies</p>
                        </div>
                    </div>
                </div>
                <div class="testimonial-card">
                    <div class="testimonial-quote">"</div>
                    <p class="testimonial-text">Working with DromoMinds was a great experience. They delivered our fundraising platform on time and within budget. Their technical expertise is truly impressive.</p>
                    <div class="testimonial-author">
                        <div class="testimonial-avatar">TW</div>
                        <div class="testimonial-info">
                            <h4>T. Wolfe</h4>
                            <p>CEO, CapitCap LLP</p>
                        </div>
                    </div>
                </div>
                <div class="testimonial-card">
                    <div class="testimonial-quote">"</div>
                    <p class="testimonial-text">We've been working with DromoMinds for over a year now. They are a trusted partner who consistently delivers high-quality work. I highly recommend them for any IT project.</p>
                    <div class="testimonial-author">
                        <div class="testimonial-avatar">BA</div>
                        <div class="testimonial-info">
                            <h4>B. Anam</h4>
                            <p>Proprietor, Industrial Enterprises</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section" id="contact">
        <div class="container">
            <div class="contact-grid">
                <div class="contact-info">
                    <h3>Let's Discuss Your Project</h3>
                    <p>Ready to transform your business? Get in touch with us today for a free consultation.</p>
                    <div class="contact-items">
                        <div class="contact-item">
                            <div class="contact-item-icon"><i class="fas fa-map-marker-alt"></i></div>
                            <div class="contact-item-text">
                                <h4>Bangalore Office</h4>
                                <p>21 Adugodi, Koramangala, Bangalore: 560030, India</p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <div class="contact-item-icon"><i class="fas fa-map-marker-alt"></i></div>
                            <div class="contact-item-text">
                                <h4>Kolkata Office</h4>
                                <p>Salt Lake Sector V, Kolkata: 700091, India</p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <div class="contact-item-icon"><i class="fas fa-phone-alt"></i></div>
                            <div class="contact-item-text">
                                <h4>Phone</h4>
                                <p>+91 7676607661</p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <div class="contact-item-icon"><i class="fas fa-envelope"></i></div>
                            <div class="contact-item-text">
                                <h4>Email</h4>
                                <p>contact@dromominds.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="contact-form-section">
                    <h3>Send Us a Message</h3>
                    <form>
                        <div class="form-grid">
                            <div class="form-group">
                                <input type="text" class="form-input" placeholder="Your Name" required>
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-input" placeholder="Email Address" required>
                            </div>
                            <div class="form-group">
                                <input type="tel" class="form-input" placeholder="Phone Number">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-input" placeholder="Company Name">
                            </div>
                            <div class="form-group full">
                                <textarea class="form-input" placeholder="Tell us about your project..."></textarea>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Send Message <i class="fas fa-paper-plane"></i></button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <a href="/" class="logo">
                        <img src="dm/logo1.png" alt="DromoMinds" class="logo-img" style="height: 40px;">
                    </a>
                    <p>DromoMinds Solutions is a leading AI development, IT services, and Pharma validation company with strategic offices in Bangalore and Kolkata, India. We deliver innovative AI solutions and cutting-edge technology services that drive business growth across global markets.</p>
                    <div class="footer-social">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div class="footer-col">
                    <h4 class="footer-title">Services</h4>
                    <ul class="footer-links">
                        <li><a href="#">AI Development</a></li>
                        <li><a href="#">Machine Learning</a></li>
                        <li><a href="#">Web Development</a></li>
                        <li><a href="#">Mobile Apps</a></li>
                        <li><a href="#">Software Development</a></li>
                        <li><a href="#">UI/UX Design</a></li>
                        <li><a href="#">Digital Marketing</a></li>
                        <li><a href="#">Pharma CSV</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4 class="footer-title">Company</h4>
                    <ul class="footer-links">
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#clients">Clients</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4 class="footer-title">Contact</h4>
                    <ul class="footer-links">
                        <li><i class="fas fa-map-marker-alt"></i> Bangalore: +91 7676607661</li>
                        <li><i class="fas fa-map-marker-alt"></i> Kolkata: +91 9876543210</li>
                        <li><i class="fas fa-envelope"></i> contact@dromominds.com</li>
                        <li><i class="fas fa-globe"></i> www.dromominds.com</li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 DromoMinds Solutions. All rights reserved.</p>
                <div class="footer-bottom-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
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

        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
        });
    </script>
</body>
</html>
