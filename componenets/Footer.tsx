import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__links-container">
        {/* Left side: Copyright */}
        <div className="footer__rights">
          <p>© 2025 Car Gallery. All Rights Reserved.</p>
        </div>

        {/* Right side: Links */}
        <div className="footer__links">
          <div className="footer__link">
            <h3>Company</h3>
            <Link href="/about">About Us</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="footer__link">
            <h3>Services</h3>
            <Link href="/buy">Buy</Link>
            <Link href="/sell">Sell</Link>
            <Link href="/rent">Rent</Link>
            <Link href="/trade">Trade</Link>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="footer__copyrights">
          <div className="footer__copyrights-link">
            <Link href="https://www.facebook.com" target="_blank">
              Facebook
            </Link>
            <Link href="https://www.twitter.com" target="_blank">
              Twitter
            </Link>
            <Link href="https://www.instagram.com" target="_blank">
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
