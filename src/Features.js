import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Features.css";

const Features = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  // Wikipedia API Search Function (Using fetch)
  const handleSearch = async () => {
    if (!query.trim()) {
      setResponse("Please enter a search term.");
      return;
    }

    setLoading(true);
    setResponse(null);

    try {
      console.log("Searching Wikipedia...");

      const res = await fetch(
        `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`
      );

      if (!res.ok) {
        throw new Error(`Wikipedia API error: ${res.statusText}`);
      }

      const data = await res.json();
      console.log("Wikipedia API Response:", data);

      if (data.extract) {
        setResponse(data.extract);
      } else {
        setResponse("No results found. Try searching for something else.");
      }
    } catch (error) {
      console.error("Wikipedia API Error:", error);
      setResponse("Error fetching data. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="features-page">
      {/* Navigation Bar */}
      <nav className="navbar">
        <Link to="/">
          <img src="/logo.png" alt="MML Logo" className="logo-img" />
        </Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>

      {/* Search Bar */}
      <section className="search-section">
        <h1>Search Anything</h1>
        <div className="search-box">
          <input
            type="text"
            placeholder="Type your query here..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={handleSearch} disabled={loading}>
            {loading ? "Searching..." : "Search"}
          </button>
        </div>
        {response && (
          <div className="search-results">
            <h2>Search Results</h2>
            <p>{response}</p>
          </div>
        )}
      </section>

      {/* Interactive Feature Buttons */}
      <section className="feature-buttons">
        <h2>Explore Our Features</h2>
        <div className="feature-container">
          <Link to="/dashboard" className="feature-card">
            <img src="/images/dashboard.jpg" alt="Dashboard" />
            <h3>Dashboard</h3>
          </Link>
          <Link to="/products" className="feature-card">
            <img src="/images/products.jpg" alt="Our Products" />
            <h3>Our Products</h3>
          </Link>
          <Link to="/ai-consultancy" className="feature-card">
            <img src="/images/ai.jpg" alt="AI Consultancy" />
            <h3>AI Consultancy</h3>
          </Link>
          <Link to="/doctor-consultancy" className="feature-card">
            <img src="/images/doctor.jpg" alt="Doctor Consultancy" />
            <h3>Doctor Consultancy</h3>
          </Link>
        </div>
      </section>

      {/* Work in Progress Section */}
      <section className="work-in-progress">
        <h2>Upcoming Features</h2>
        <p>We are working hard to develop these features. Stay tuned for updates!</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Mavericks MediLink | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Features;
