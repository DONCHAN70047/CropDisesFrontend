"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import '../page.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      {/* ---------- LEFT: LOGO ---------- */}
      <div className="logo">
        <Link href="/">
          <img src="/EsmartPayLogo.png" alt="EsmartPay Logo" className="logo-img" />
        </Link>
      </div>

      {/* ---------- NAV LINKS ---------- */}
      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link href="/" onClick={closeMenu}>Home</Link>
        <Link href="/AboutUS" onClick={closeMenu}>About Us</Link>
        <Link href="/UnderConstruction" onClick={closeMenu}>Services</Link>
        <Link href="/UnderConstruction" onClick={closeMenu}>Products</Link>
        <Link href="/UnderConstruction" onClick={closeMenu}>Career</Link>
        <Link href="/UnderConstruction" onClick={closeMenu}>Contact Us</Link>
        <Link href="/UnderConstruction" onClick={closeMenu}>Team</Link>

        {/* MOBILE LOGIN */}
        <Link href="/login">
          <button className="login-btn mobile-login" onClick={closeMenu}>Login</button>
        </Link>
      </nav>

      {/* ---------- RIGHT SIDE ---------- */}
      <div className="right-icons">
        <Link href="/login">
          <button className="login-btn desktop-login">Login</button>
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
};

export default Header;
