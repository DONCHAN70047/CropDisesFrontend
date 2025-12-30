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
      {/* ================= HEADER ================= */}
      <header className="header">
        {/* LEFT SECTION */}
        <div className="left">
          {/* HAMBURGER */}
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

        {/* RIGHT SECTION */}
        <div className="actions">
          <Link href="/login" className="loginBtn">Login</Link>
          <Link href="/signup" className="signupBtn">Sign Up</Link>
        </div>
      </header>

      {/* ================= BACKDROP ================= */}
      {menuOpen && (
        <div className="backdrop" onClick={() => setMenuOpen(false)} />
      )}

      {/* ================= SLIDE NAV ================= */}
      <aside className={`slideNav ${menuOpen ? "open" : ""}`}>
        <button className="closeBtn" onClick={() => setMenuOpen(false)}>✕</button>

        <nav>
          <Link onClick={() => setMenuOpen(false)} className={isActive("/") ? "active" : ""} href="/">Home</Link>
          <Link onClick={() => setMenuOpen(false)} className={isActive("/about") ? "active" : ""} href="/about">About Us</Link>
          <Link onClick={() => setMenuOpen(false)} className={isActive("/products") ? "active" : ""} href="/products">Products</Link>
          <Link onClick={() => setMenuOpen(false)} className={isActive("/diseases") ? "active" : ""} href="/diseases">Disease Info</Link>
          <Link onClick={() => setMenuOpen(false)} className={isActive("/contact") ? "active" : ""} href="/contact">Contact</Link>
        </nav>
      </aside>

      {/* ================= STYLES ================= */}
      <style jsx>{`
        /* HEADER */
        .header {
          position: fixed;
          top: 0;
          width: 100%;
          height: 72px;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: linear-gradient(
            180deg,
            rgba(10,10,10,0.92),
            rgba(10,10,10,0.82)
          );
          backdrop-filter: blur(14px);
          box-shadow: 0 10px 40px rgba(0,0,0,0.7);
          z-index: 1000;
        }

        .left {
          display: flex;
          align-items: center;
          gap: 28px;
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
          border-radius: 6px;
          transition: all 0.35s ease;
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
          font-size: 1.45rem;
          font-weight: 800;
          letter-spacing: 0.4px;
        }

        .logo small {
          display: block;
          font-size: 0.7rem;
          color: #9ca3af;
          letter-spacing: 1px;
        }

        /* ACTION BUTTONS */
        .actions {
          display: flex;
          gap: 14px;
        }

        .loginBtn {
          color: #e5e7eb;
          text-decoration: none;
          padding: 8px 16px;
          border-radius: 10px;
          font-size: 0.9rem;
          transition: background 0.25s ease;
        }

        .loginBtn:hover {
          background: rgba(255,255,255,0.12);
        }

        .signupBtn {
          background: linear-gradient(135deg, #22c55e, #16a34a);
          color: #000;
          text-decoration: none;
          padding: 8px 18px;
          border-radius: 10px;
          font-weight: 700;
          font-size: 0.9rem;
          box-shadow: 0 6px 18px rgba(34,197,94,0.45);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .signupBtn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(34,197,94,0.6);
        }

        /* BACKDROP */
        .backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.65);
          z-index: 900;
        }

        /* SLIDE NAV */
        .slideNav {
          position: fixed;
          top: 0;
          left: 0;
          height: 100vh;
          width: 280px;
          background: rgba(12,12,12,0.98);
          backdrop-filter: blur(18px);
          box-shadow: 20px 0 60px rgba(0,0,0,0.9);
          transform: translateX(-100%);
          transition: transform 0.4s cubic-bezier(0.4,0,0.2,1);
          z-index: 1001;
          padding-top: 100px;
        }

        .slideNav.open {
          transform: translateX(0);
        }

        .closeBtn {
          position: absolute;
          top: 18px;
          right: 20px;
          font-size: 1.6rem;
          background: none;
          border: none;
          color: #e5e7eb;
          cursor: pointer;
        }

        .slideNav nav {
          display: flex;
          flex-direction: column;
          gap: 22px;
          padding: 0 26px;
        }

        .slideNav a {
          color: #e5e7eb;
          font-size: 1.05rem;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.25s ease;
        }

        .slideNav a:hover,
        .slideNav a.active {
          color: #22c55e;
        }

        /* MOBILE */
        @media (max-width: 480px) {
          .actions {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
