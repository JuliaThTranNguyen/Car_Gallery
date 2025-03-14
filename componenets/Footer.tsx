import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-inner">
        <div className="footer-grid">
          <div>
            <h3 className="footer-title">My App</h3>
            <p className="footer-description">
              Your trusted platform for XYZ. Join us today!
            </p>
          </div>

          <div>
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link href="/about" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="footer-link">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="footer-link">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-subtitle">Follow Us</h4>
            <div className="footer-social-icons">
              <a href="https://twitter.com" className="footer-social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://facebook.com" className="footer-social-icon">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://linkedin.com" className="footer-social-icon">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="footer-bottom text-center mt-8">
            <p className="footer-bottom-text">
              © 2025 My App. All rights reserved.
            </p>
            <p className="footer-bottom-text mt-2">
              Need help?{" "}
              <Link href="/contact" className="footer-link">
                Contact us
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
