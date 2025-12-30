"use client";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} KBTech. All Rights Reserved.</p>

      <style jsx>{`
        .footer {
          background-color: #0f172a;
          color: #cbd5f5;
          text-align: center;
          padding: 18px 10px;
          font-size: 0.9rem;
        }
      `}</style>
    </footer>
  );
}
