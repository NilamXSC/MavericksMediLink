import React from "react";
import { Link } from "react-router-dom";
import background from "./assets/background.jpg"; // Import Background Image
import "./HomePage.css"; // Import CSS

const HomePage = () => {
  return (
    <div className="homepage" style={{ backgroundImage: `url(${background})` }}>
      {/* Navigation Bar */}
      <nav className="navbar">
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="MML Logo" className="logo-img" />
        </Link>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/auth" className="auth-button">Sign In / Register</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h1>Welcome to Mavericks MediLink</h1>
        <p>AI-driven healthcare with real-time monitoring, smart diagnostics, and secure medical records.</p>
      </header>

      {/* Features Section */}
      <section className="features">
        <div className="feature-box">
          <h2>Real-Time Monitoring</h2>
          <p>Wearable IoT devices track vitals 24/7.</p>
        </div>
        <div className="feature-box">
          <h2>AI Diagnostics</h2>
          <p>Detects diseases before symptoms appear.</p>
        </div>
        <div className="feature-box">
          <h2>Blockchain Security</h2>
          <p>Ensures secure patient records.</p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How Mavericks MediLink Works</h2>
        <div className="steps">
          <div className="step">
            <h3>📡 Connect Devices</h3>
            <p>Sync your wearable health devices with our platform.</p>
          </div>
          <div className="step">
            <h3>🧠 AI Analysis</h3>
            <p>Our AI scans your health data for early warning signs.</p>
          </div>
          <div className="step">
            <h3>📊 Get Reports</h3>
            <p>Receive real-time health reports and doctor insights.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose">
        <h2>Why Choose Mavericks MediLink?</h2>
        <div className="why-boxes">
          <div className="why-box">
            <h3>🚀 Cutting-Edge AI</h3>
            <p>Our AI-driven diagnostics provide early disease detection.</p>
          </div>
          <div className="why-box">
            <h3>🌍 Global Accessibility</h3>
            <p>With 5G-powered remote healthcare, we bring medical services to everyone.</p>
          </div>
          <div className="why-box">
            <h3>🔒 Secure & Private</h3>
            <p>Blockchain ensures private and protected medical records.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-boxes">
          <div className="testimonial-box">
            <p>"Mavericks MediLink saved my life with early heart condition detection!"</p>
            <h4>- Daniel Nchang</h4>
          </div>
          <div className="testimonial-box">
            <p>"Accurate AI diagnostics, faster than any doctor!"</p>
            <h4>- Dr. Anil Saikia</h4>
          </div>
          <div className="testimonial-box">
            <p>"The 5G monitoring gave me peace of mind about my family’s health."</p>
            <h4>- Conrad Sangma</h4>
          </div>
          <div className="testimonial-box alternate-style">
            <p>"The seamless blockchain security ensures my records stay private."</p>
            <h4>- Meena J.</h4>
          </div>
          <div className="testimonial-box alternate-style">
            <p>"Remote consultations have made healthcare more accessible than ever!"</p>
            <h4>- Lucy Moitei</h4>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
        <h2>Join the Future of Healthcare</h2>
        <p>Take control of your health with AI-powered diagnostics and secure medical records.</p>
        <button className="cta-btn">Get Started</button>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>📍 Address: Girijananda Choudhury University, Guwahati, NE, India</p>
        <p>📧 Email: contact@maverickmedilink5g.com</p>
        <p>📞 Phone: +91 9365851006</p>
      </footer>
    </div>
  );
};

export default HomePage;
