"use client";

import Link from "next/link";
import logo from "@/public/car.ico";
import Image from "next/image";
import { useState } from "react";
import Button from "../ui/Button";

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
        <div className="menu-icon" onClick={toggleMenu}>
          📑 Menu
        </div>

        <nav className={`nav-menu ${menuOpen ? "show" : "hidden"}`}>
          <ul className="menu-list">
            <li className="top-li">
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Service</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
            <li>
              <Link href="#">Buy</Link>
            </li>
            <li>
              <Link href="#">Sell</Link>
            </li>
            <li>
              <Link href="#">Rent</Link>
            </li>
          </ul>
        </nav>

        <div className="outline-button-wrapper">
          <Button text="Sign up" variant="basic" />
        </div>
      </div>
    </header>
  );
};

export default Header;
