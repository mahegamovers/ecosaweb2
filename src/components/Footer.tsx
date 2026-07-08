import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left */}
        <div className="footer-brand">
          <img
            src="/logo.png"
            alt="ECOSA Logo"
            className="footer-logo"
          />

          <div>
            <h3>ECOSA</h3>
            <p>Equatorial College Old Students Association</p>

            <p className="footer-tagline">
              Together we can <br />
              make a difference.
            </p>

            <div className="social-links">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>

              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>

              <a href="#">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}

        <div className="footer-links">
          <h4>Quick Links</h4>

          <a href="/">Home</a>
          <a href="/about">About ECOSA</a>
          <a href="/membership">Membership</a>
          <a href="/projects">Projects</a>
          <a href="/resources">Resources</a>
          <a href="/contact">Contact</a>
        </div>

        {/* Membership */}

        <div className="footer-links">
          <h4>Membership</h4>

          <a href="/register">Register</a>
          <a href="/members">Members</a>
          <a href="/chapters">Chapters</a>
          <a href="/payments">Pay Membership</a>
        </div>

        {/* Support */}

        <div className="footer-links">
          <h4>Support</h4>

          <a href="/donate">Donate</a>
          <a href="/projects">Projects</a>
          <a href="/faq">FAQ</a>
        </div>

        {/* Contact */}

        <div className="footer-links">
          <h4>Contact</h4>

          <p>📞 +256 700 123 456</p>
          <p>✉️ info@ecosa.org</p>
          <p>
            📍 P.O. Box 1234,
            <br />
            Kampala, Uganda
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 ECOSA — Equatorial College Old Students Association. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
