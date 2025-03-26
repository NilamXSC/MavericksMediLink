import React from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css"; // Import CSS

const AboutUs = () => {
  return (
    <div className="about-page">
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
        </ul>
      </nav>

      {/* About Us Header */}
      <header className="about-header">
        <h1>About Mavericks MediLink 5G</h1>
        <br></br>
        <p>Revolutionizing Healthcare.</p>
      </header>

      {/* Our Mission Section */}
      <section className="our-mission">
        <h2>🌍 Our Mission</h2>
        <br></br>
        <p>
          Mavericks MediLink is dedicated to bridging the healthcare gap using AI-driven diagnostics, real-time monitoring, and blockchain-secured records. 
          We aim to make healthcare accessible, affordable, and secure for everyone, regardless of location.
        </p>
      </section>

      {/* How We Work Section */}
      <section className="how-we-work">
        <h2>⚙️ How Mavericks MediLink Works</h2>
        <br></br>
        <div className="work-steps">
          <div className="step">
            <h3>📡 Real-Time Health Monitoring</h3>
            <p>Wearable IoT devices track vitals and send alerts in real-time.</p>
          </div>
          <div className="step">
            <h3>🧠 AI Diagnostics</h3>
            <p>Our AI system detects diseases before symptoms appear.</p>
          </div>
          <div className="step">
            <h3>🔒 Blockchain Security</h3>
            <p>All patient data is securely encrypted for privacy & security.</p>
          </div>
          <div className="step">
            <h3>📊 5G-Powered Healthcare</h3>
            <p>Faster diagnosis & remote consultations with ultra-low latency.</p>
          </div>
        </div>
      </section>

      {/* How to Get Our Services Section */}
      <section className="get-started">
        <h2>🚀 How to Access Our Services</h2>
        <p>Follow these simple steps to start using Mavericks MediLink:</p>
        <br></br>
        <div className="get-steps">
          <div className="step-box">
            <h3>📲 Download Our App</h3>
            <p>Available on Android, iOS & Web.</p>
          </div>
          <div className="step-box">
            <h3>🩺 Connect Wearable Devices</h3>
            <p>Sync your smartwatch, ECG monitor, or other health devices.</p>
          </div>
          <div className="step-box">
            <h3>👨‍⚕️ Book AI-Assisted Consultation</h3>
            <p>AI pre-diagnoses and connects you to a doctor if needed.</p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="faq">
        <h2>❓ Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>💡 How does AI detect diseases?</h3>
          <p>Our AI analyzes real-time vitals and compares them with millions of datasets to detect anomalies and early disease markers.</p>
        </div>
        <div className="faq-item">
          <h3>📡 Can I use this in rural areas?</h3>
          <p>Yes! Our system is optimized for 5G but also works efficiently on 4G networks, making healthcare accessible everywhere.</p>
        </div>
        <div className="faq-item">
          <h3>🔐 Is my data secure?</h3>
          <p>Absolutely! Our blockchain-based security ensures that your data is encrypted and accessible only to authorized personnel.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>📞 Get in Touch</h2>
        <p>Have questions? Need assistance? Reach out to us!</p>
        <p>📍 Address: 123 Healthcare Innovation Road, NER, India</p>
        <p>📧 Email: support@5ghealth.com</p>
        <p>📞 Phone: +91 9876543210</p>
      </section>
    </div>
  );
};

export default AboutUs;
