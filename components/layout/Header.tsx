"use client";

import Link from "next/link";
import logo from "@/public/car.ico";
import Image from "next/image";
import { useState } from "react";
import Button from "../ui/Button";
import Navbar from "../ui/Navbar";

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

        <Navbar menuOpen={menuOpen} />

        <div className="outline-button-wrapper">
          <Button text="Sign up" variant="basic" />
        </div>
      </div>
    </header>
  );
};

export default Header;
