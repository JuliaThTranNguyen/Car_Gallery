import Link from "next/link";
import React from "react";

interface NavbarProps {
  menuOpen: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ menuOpen }) => {
  return (
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
  );
};

export default Navbar;
