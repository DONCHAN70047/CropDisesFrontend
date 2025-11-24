import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import "./DashboardHeaderSidebar.css";

const DashboardHeaderSidebar = ({ adminName, adminPhoto, handleLogout }) => {
  const router = useRouter();
  const [isTransactionsOpen, setIsTransactionsOpen] = useState(true);

  const defaultImage = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
  const finalPhoto = adminPhoto || defaultImage;

  
  const navigateTo = (panelName) => {
    router.push(`/Admin?panel=${panelName}`);
  };

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
          <img className="logo-img" src="/EsmartPayLogo.png" alt="Logo" />
          <div className="topbar-date">
            <span className="date-left">
              November <span className="year-small">2025</span>
            </span>
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
            <img src={finalPhoto} className="user-pic" alt="User" />
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
          <img src={finalPhoto} className="sidebar-user-pic" alt="User" />
          <div className="user-name">{adminName || "Esmart Admin"}</div>
          <div className="user-role">Smart Retailer - 9547783824 - SBR38904</div>
        </div>

        <nav className="nav-menu">
          <ul>
            <li onClick={() => router.push("/Admin")}> Dashboard </li>
            <li onClick={() => navigateTo("/Admin/SmartSummary")}>Smart Summary</li>

            {/* Transactions Dropdown */}
            <li className="dropdown-title" onClick={() => setIsTransactionsOpen(!isTransactionsOpen)}>
              Transactions ▾
            </li>

            <AnimatePresence>
              {isTransactionsOpen && (
                <motion.ul
                  className="submenu"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <li onClick={() => navigateTo("MoneyTransferTransactionsSlidebar")}>Money Transfer</li>
                  <li onClick={() => navigateTo("UPITransferTransactionsSlidebar")}>UPI Transfer</li>
                  <li onClick={() => navigateTo("PPITransferTransactionsSlidebar")}>PPI Transfer</li>
                  <li onClick={() => navigateTo("UtilityTransactionsSlidebar")}>Utility Bills</li>
                  <li onClick={() => navigateTo("EducationalFeesSlidebar")}>Education Fees</li>
                  <li onClick={() => navigateTo("AEPSTransactionsSlidebar")}>AEPS / MATM</li>
                  <li onClick={() => navigateTo("CreditCardTransactionsSlidebar")}>Credit Card</li>
                  <li onClick={() => navigateTo("FlightBookingsSidebar")}>Flight Bookings</li>
                </motion.ul>
              )}
            </AnimatePresence>

            <li onClick={() => navigateTo("RefundPending")}>Refund Pending</li>
            <li onClick={() => navigateTo("MoneyRequests")}>Money Requests</li>
            <li onClick={() => navigateTo("Statements")}>Statements</li>
            <li onClick={() => navigateTo("Settlement")}>Settlement</li>

            <li className="section-title">Privacy & Settings</li>
            <li onClick={() => navigateTo("Configurations")}>Configurations</li>
            <li onClick={() => navigateTo("Credentials")}>Credentials</li>
          </ul>
        </nav>

        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </motion.aside>
    </>
  );
};

export default DashboardHeaderSidebar;
