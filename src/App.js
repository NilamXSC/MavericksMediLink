import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import AboutUs from "./AboutUs";
import Features from "./Features";
import ContactUs from "./ContactUs";
import Dashboard from "./Dashboard";  // Added
import Products from "./Products";  // Added
import AIConsultancy from "./AIConsultancy";  // Added
import DoctorConsultancy from "./DoctorConsultancy";  // Added
import "./HomePage.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/dashboard" element={<Dashboard />} />  {/* Added */}
        <Route path="/products" element={<Products />} />  {/* Added */}
        <Route path="/ai-consultancy" element={<AIConsultancy />} />  {/* Added */}
        <Route path="/doctor-consultancy" element={<DoctorConsultancy />} />  {/* Added */}
      </Routes>
    </Router>
  );
};

export default App;