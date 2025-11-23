import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import "./DashboardHeaderSidebar.css";

const DashboardHeaderSidebar = ({ adminName, adminPhoto, handleLogout }) => {
  const router = useRouter();
  const [isTransactionsOpen, setIsTransactionsOpen] = useState(true);

  const defaultImage = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
  const finalPhoto = adminPhoto || defaultImage;

  return (
    <>
      {/* ---------------- TOP NAVBAR ---------------- */}
      <motion.header
        className="top-navbar"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Left */}
        <div className="topbar-left">
          <img className="logo-img" src="/EsmartPayLogo.png" />
          <div className="topbar-date">
            <span className="date-left">November <span className="year-small">2025</span></span>
            <span className="date-right">12</span>
          </div>
        </div>

        {/* Center */}
        <div className="topbar-center">
          <div className="balance-box">
            <div className="wallet-amount">₹ 0.00</div>
            <div className="wallet-label">Available</div>
            <div className="wallet-subtext">Wallet Balance</div>
          </div>
          <div className="balance-box">
            <div className="wallet-amount">₹ 0.00</div>
            <div className="wallet-label">Available</div>
            <div className="wallet-subtext">AEPS Balance</div>
          </div>
        </div>

        {/* Right */}
        <div className="topbar-right">
          <span className="notify-bell">🔔</span>

          <span className="user-info-bar">
            <img src={finalPhoto} className="user-pic" />
            <span>
              <span className="welcome-label">Welcome,</span>
              <span className="user-name-bar">{adminName}</span>
            </span>
          </span>
        </div>
      </motion.header>

      {/* ---------------- SIDEBAR ---------------- */}
      <motion.aside className="sidebar">
        
        <div className="user-info">
          <img src={finalPhoto} className="sidebar-user-pic" />
          <div className="user-name">{adminName || "Esmart Admin"}</div>
          <div className="user-role">Smart Retailer - 9547783824 - SBR38904</div>
        </div>

        <nav className="nav-menu">
          <ul>
            <li onClick={() => router.push("/AdminDashboard")}>Dashboard</li>

            <li onClick={() => router.push("/SmartSummary")}>Smart Summary</li>

            {/* Dropdown */}
            <li className="dropdown-title" onClick={() => setIsTransactionsOpen(!isTransactionsOpen)}>
              Transactions ▾
            </li>

            <AnimatePresence>
              {isTransactionsOpen && (
                <motion.ul className="submenu">
                  <li onClick={() => router.push("/MoneyTransferTransactions")}>Money Transfer</li>
                  <li onClick={() => router.push("/UPITransferTransactions")}>UPI Transfer</li>
                  <li onClick={() => router.push("/PPITransferTransactions")}>PPI Transfer</li>
                  <li onClick={() => router.push("/UtilityTransactions")}>Utility Bills</li>
                  <li onClick={() => router.push("/EducationalFees")}>Education Fees</li>
                  <li onClick={() => router.push("/AEPSTransactions")}>AEPS / MATM</li>
                  <li onClick={() => router.push("/CreditCardTransactions")}>Credit Card</li>
                  <li onClick={() => router.push("/FlightBookings")}>Flight Bookings</li>
                </motion.ul>
              )}
            </AnimatePresence>

            <li onClick={() => router.push("/RefundPending")}>Refund Pending</li>
            <li onClick={() => router.push("/MoneyRequests")}>Money Requests</li>
            <li onClick={() => router.push("/Statements")}>Statements</li>
            <li onClick={() => router.push("/Settlement")}>Settlement</li>

            <li className="section-title">Privacy & Settings</li>

            <li onClick={() => router.push("/Configurations")}>Configurations</li>
            <li onClick={() => router.push("/Credentials")}>Credentials</li>
          </ul>
        </nav>

        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </motion.aside>
    </>
  );
};

export default DashboardHeaderSidebar;
