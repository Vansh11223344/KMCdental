import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Front.css";

const Front = () => {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  const handleBookConsultationClick = () => {
    if (isAuthenticated) navigate("/DentalForm");
    else navigate("/Login");
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const dentalIssues = [
    { name: "Cavities", path: "/Cavity" },
    { name: "Toothache", path: "/Toothache" },
    { name: "Tooth Sensitivity", path: "/ToothSensitivity" },
    { name: "Gum Disease", path: "/Gum" },
    { name: "Tooth Abscess", path: "/Abscess" },
    { name: "Tooth Fractures", path: "/Fractures" },
    { name: "Tooth Erosion", path: "/Erosion" },
    { name: "Teeth Grinding", path: "/Grinding" },
    { name: "Wisdom Teeth", path: "/ImpactedWisdom" },
    { name: "Malocclusion", path: "/Malocclusion" },
    { name: "Broken Teeth", path: "/BrokenTeeth" },
    { name: "Oral Ulcers", path: "/Ulcers" },
    { name: "Stained Teeth", path: "/Stained" },
    { name: "Dry Mouth", path: "/Xerostomia" },
    { name: "Tooth Infection", path: "/Infection" },
    { name: "Loose Teeth", path: "/LooseTeeth" },
    { name: "Dental Trauma", path: "/DentalTrauma" },
    { name: "Root Canal", path: "/RootCanal" },
    { name: "TMJ Disorders", path: "/TMJDisorders" },
    { name: "Enamel Hypoplasia", path: "/Hypoplasia" },
  ];

  return (
    <div className={`app ${darkMode ? "dark-mode" : ""}`}>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <span role="img" aria-label="Tooth Icon">🦷</span> DentalCare+
        </div>
        <ul className="nav-links">
          <li className="nav-item" onClick={() => scrollToSection("how-can-we-help")}>
            About Us
          </li>
          <li className="nav-item" onClick={() => scrollToSection("key-services")}>
            Services
          </li>
        </ul>
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Your Smile, Our Expertise</h1>
          <p>Professional dental care at your fingertips. Book online consultations with ease.</p>
          <button className="cta-button" onClick={() => navigate("/DentistConsultationPage")}>
            Schedule a Consultation
          </button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>Why Trust DentalCare+?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <span role="img" aria-label="Clock">⏰</span>
            <h3>Convenient Booking</h3>
            <p>Schedule appointments anytime, anywhere.</p>
          </div>
          <div className="feature-card">
            <span role="img" aria-label="Dentist">👩‍⚕️</span>
            <h3>Expert Dentists</h3>
            <p>Consult with certified dental professionals.</p>
          </div>
          <div className="feature-card">
            <span role="img" aria-label="Shield">🔒</span>
            <h3>Secure & Private</h3>
            <p>Your data is protected with top-tier encryption.</p>
          </div>
        </div>
      </section>

      {/* Key Services Section */}
      <section id="key-services" className="key-services">
        <h2>Explore Common Dental Issues</h2>
        <div className="services-grid">
          {dentalIssues.map((issue) => (
            <div key={issue.name} className="service-card">
              <h3>{issue.name}</h3>
              <button onClick={() => navigate(issue.path)}>Learn More</button>
            </div>
          ))}
        </div>
      </section>

      {/* How Can We Help Section */}
      <section id="how-can-we-help" className="how-can-we-help">
        <h1>How Can We Assist You?</h1>
        <p>
          From routine checkups to cosmetic dentistry, our experts provide personalized advice based on your needs.
          Upload photos of your teeth for a tailored consultation.
        </p>
        <h2>Benefits of Online Consultations</h2>
        <ul>
          <li>Quick and easy process – get started in minutes.</li>
          <li>Professional feedback from qualified dentists.</li>
          <li>Convenience – consult from the comfort of home.</li>
        </ul>
        <button className="cta-button" onClick={handleBookConsultationClick}>
          Start Your Consultation
        </button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">DentalCare+</div>
          <div className="contact-info">
            <p>📞 +1-800-DENTAL</p>
            <p>✉️ info@dentalcareplus.com</p>
          </div>
          <div className="social-proof">
            <p>👩‍⚕️ Trusted by 15,000+ Patients</p>
            <p>⭐ 4.9/5 Satisfaction Rating</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Front;