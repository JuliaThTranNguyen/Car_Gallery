import React from "react";
import Link from "next/link";
import { sourceCode } from "@/commons";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-top-container">
        <div className="footer-grid">
          <div>
            <h3 className="footer-title">Car Gallery</h3>
            <p className="footer-description">
              Welcome to our website! We valuable your time with us 💕
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
              <a
                href="https://twitter.com"
                className="footer-social-icon"
                aria-label="Follow us on Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://facebook.com"
                className="footer-social-icon"
                aria-label="Follow us on Facebook"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://linkedin.com"
                className="footer-social-icon"
                aria-label="Follow us on LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href={sourceCode}
                className="footer-social-icon"
                aria-label="View project on Github"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer-subtitle">Further Information</h4>
            <div className="footer-social-icons">
              <p className="footer-description">
                Need help?{" "}
                <Link href="/contact" className="footer-link">
                  Contact us
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom-container">
        <p className="footer-bottom-text">
          <Link href={sourceCode} className="footer-link">
            © 2025 Car Gallery@Github
          </Link>
          | @JuliaThTranNguyen | All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
