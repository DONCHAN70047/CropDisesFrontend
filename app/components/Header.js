"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="left">
          {/* HAMBURGER (3 LINES) */}
          <div
            className={`menuBtn ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </div>

          {/* LOGO */}
          <div className="logo">
            <span>KBTech</span>
            <small>Rice Disease AI</small>
          </div>
        </div>
      </header>

      {/* BACKDROP (click outside to close) */}
      {menuOpen && (
        <div className="backdrop" onClick={() => setMenuOpen(false)} />
      )}

      {/* SIDE NAV */}
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <Link onClick={() => setMenuOpen(false)} className={isActive("/") ? "active" : ""} href="/">Home</Link>
        <Link onClick={() => setMenuOpen(false)} className={isActive("/about") ? "active" : ""} href="/about">About Us</Link>
        <Link onClick={() => setMenuOpen(false)} className={isActive("/products") ? "active" : ""} href="/products">Product Us</Link>
        <Link onClick={() => setMenuOpen(false)} className={isActive("/diseases") ? "active" : ""} href="/diseases">Informational Disease</Link>
        <Link onClick={() => setMenuOpen(false)} className={isActive("/contact") ? "active" : ""} href="/contact">Contact Us</Link>
      </nav>

      <style jsx>{`
        /* HEADER */
        .header {
          position: fixed;
          top: 0;
          width: 100%;
          height: 72px;
          padding: 0 20px;
          display: flex;
          align-items: center;
          background: rgba(10, 10, 10, 0.85);
          backdrop-filter: blur(12px);
          z-index: 1000;
          box-shadow: 0 6px 25px rgba(0, 0, 0, 0.6);
        }

        .left {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        /* HAMBURGER */
        .menuBtn {
          display: flex;
          flex-direction: column;
          gap: 6px;
          cursor: pointer;
        }

        .menuBtn span {
          width: 26px;
          height: 3px;
          background: #ffffff;
          border-radius: 3px;
          transition: all 0.3s ease;
        }

        .menuBtn.active span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 6px);
        }

        .menuBtn.active span:nth-child(2) {
          opacity: 0;
        }

        .menuBtn.active span:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }

        /* LOGO */
        .logo span {
          color: #22c55e;
          font-size: 1.4rem;
          font-weight: 700;
        }

        .logo small {
          display: block;
          font-size: 0.7rem;
          color: #9ca3af;
        }

        /* BACKDROP */
        .backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.55);
          z-index: 900;
        }

        /* NAV MENU */
        .nav {
          position: fixed;
          top: 88px;
          left: 20px;
          width: 260px;
          background: rgba(12, 12, 12, 0.98);
          backdrop-filter: blur(14px);
          display: flex;
          flex-direction: column;
          gap: 18px;
          padding: 24px;
          border-radius: 14px;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.75);
          opacity: 0;
          transform: translateY(-15px);
          pointer-events: none;
          transition: all 0.3s ease;
          z-index: 1001;
        }

        .nav.open {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .nav a {
          color: #e5e7eb;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
          transition: color 0.25s ease;
        }

        .nav a:hover {
          color: #22c55e;
        }

        .nav a.active {
          color: #22c55e;
          font-weight: 600;
        }
      `}</style>
    </>
  );
}
