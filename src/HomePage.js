import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./HomePage.css";

const HomePage = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="homepage">
      {/* Navbar */}
      <nav className="navbar">
        <Link to="/" className="logo">Mavericks MediLink</Link>
        <ul className="nav-links">
          <li><Link to="/about">{t("about")}</Link></li>
          <li><Link to="/features">{t("features")}</Link></li>
          <li><Link to="/contact">{t("contact")}</Link></li>
          <li><Link to="/auth">{t("signin")}</Link></li>
          <li className="dropdown">
            🌍 <span>{t("chooseLang")}</span>
            <ul className="dropdown-content">
              <li onClick={() => changeLanguage("en")}>English</li>
              <li onClick={() => changeLanguage("hi")}>हिन्दी</li>
              <li onClick={() => changeLanguage("as")}>অসমীয়া</li>
            </ul>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>{t("welcome")}</h1>
          <p>{t("heroDescription")}</p>
          <Link to="/features" className="cta-button">{t("explore")}</Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="features">
        <h2>{t("ourFeatures")}</h2>
        <div className="feature-container">
          <div className="feature-box">
            <h3>{t("aiConsultancy")}</h3>
            <p>{t("aiConsultancyDesc")}</p>
          </div>
          <div className="feature-box">
            <h3>{t("liveDoctor")}</h3>
            <p>{t("liveDoctorDesc")}</p>
          </div>
          <div className="feature-box">
            <h3>{t("telemedicine")}</h3>
            <p>{t("telemedicineDesc")}</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="cta-section">
        <h2>{t("ctaTitle")}</h2>
        <p>{t("ctaDesc")}</p>
        <Link to="/contact" className="cta-button">{t("contactUs")}</Link>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Mavericks MediLink | {t("allRightsReserved")}</p>
      </footer>
    </div>
  );
};

export default HomePage;
