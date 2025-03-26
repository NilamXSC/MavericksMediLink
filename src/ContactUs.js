import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ContactUs.css"; // Import CSS

const ContactUs = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="contact-page">
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

      {/* Contact Header */}
      <header className="contact-header">
        <h1>Contact Mavericks MediLink</h1>
        <br></br>
        <p>We are here to answer any of your questions.</p>
      </header>

      {/* Contact Information */}
      <section className="contact-info">
        <div className="contact-details">
          <h2>📍 Our Office</h2>
          <p>123 Healthcare Innovation Road, NER, India</p>
        </div>
        <div className="contact-details">
          <h2>📧 Email Us</h2>
          <p>support@5ghealth.com</p>
        </div>
        <div className="contact-details">
          <h2>📞 Call Us</h2>
          <p>+91 9876543210</p>
        </div>
      </section>

      {/* CEO & Founders Section */}
      <section className="founders">
        <h2>Meet Our Team</h2>
        <br></br>
        <div className="founders-grid">
          <div className="founder">
            <h3>👨‍💼 Nilam Chakraborty</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="founder">
            <h3>👨‍💻 Pariksheet Dworah</h3>
            <p>Co-Founder & Tech Lead</p>
          </div>
          <div className="founder">
            <h3>👨‍🔬 Nishant Dutta</h3>
            <p>Co-Founder & AI Researcher</p>
          </div>
        </div>
      </section>

      {/* Expandable "Get to Know More" Section */}
      <section className="about-expandable">
        <h2>More About Mavericks MediLink</h2>
        <br></br>
        <button onClick={() => setExpanded(!expanded)} className="expand-btn">
          {expanded ? "Read Less" : "Get to Know More"}
        </button>
        {expanded && (
          <p className="expanded-text">
            Mavericks MediLink is a health-tech startup revolutionizing healthcare by integrating AI-driven diagnostics, 
            IoT-based health monitoring, and blockchain security. Our goal is to make healthcare more accessible, efficient, 
            and secure for everyone. Whether you need real-time vitals monitoring, disease prediction, or secure medical data storage, 
            Mavericks MediLink is your one-stop solution.
          </p>
        )}
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Mavericks MediLink | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default ContactUs;
