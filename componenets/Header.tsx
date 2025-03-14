"use client";

import Link from "next/link";
import logo from "../public/car.ico";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header-section">
      <div className="header-left-container">
        <Link href="/" className="logo">
          <Image src={logo} alt="Logo" className="logo-icon" />
          <span className="app-name">Car Gallery</span>
        </Link>
      </div>

      <div className="header-right-container">
        <div
          className="menu-icon sm:hidden text-2xl cursor-pointer"
          onClick={toggleMenu}
        >
          📑 Menu
        </div>

        <nav className={`nav-menu ${menuOpen ? "block" : "hidden"} sm:block`}>
          <ul className="menu-list">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/service">Service</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/buy">Buy</Link>
            </li>
            <li>
              <Link href="/sell">Sell</Link>
            </li>
            <li>
              <Link href="/rent">Rent</Link>
            </li>
          </ul>
        </nav>
        <div className="outline-button-wrapper">
          <button className="outline-button">Get started</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
