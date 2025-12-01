import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import "./DashboardHeaderSidebar.css";

const DashboardHeaderSidebar = ({ adminName, adminPhoto, handleLogout }) => {
  const router = useRouter();
  
  // --- STATES FOR DROPDOWNS ---
  const [isTransactionsOpen, setIsTransactionsOpen] = useState(false);
  const [isRefundPendingOpen, setIsRefundPendingOpen] = useState(false);
  const [isMoneyRequestsOpen, setIsMoneyRequestsOpen] = useState(false);
  const [isStatementsOpen, setIsStatementsOpen] = useState(false);
  const [isSettlementOpen, setIsSettlementOpen] = useState(false);
  const [isChargesSlabsOpen, setIsChargesSlabsOpen] = useState(false);
  const [isConfigurationsOpen, setIsConfigurationsOpen] = useState(false); // Controls Configurations
  const [isCredentialsOpen, setIsCredentialsOpen] = useState(false); // Controls Credentials

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
            <li onClick={() => navigateTo("SmartSummary")}>Smart Summary</li>

            {/* --- 1. Transactions Dropdown --- */}
            <li
              className="dropdown-title"
              onClick={() => setIsTransactionsOpen(!isTransactionsOpen)}
            >
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

            {/* --- 2. Refund Pending Dropdown --- */}
            <li 
              className="dropdown-title"
              onClick={() => setIsRefundPendingOpen(!isRefundPendingOpen)}
            >
              Refund Pending ▾
            </li>
            <AnimatePresence>
              {isRefundPendingOpen && (
                <motion.ul
                  className="submenu"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <li onClick={() => navigateTo("RefundMoneyTransferSlidebar")}>Money Transfer</li>
                  <li onClick={() => navigateTo("RefundPPISlidebar")}>PPI Transfer</li>
                  <li onClick={() => navigateTo("RefundUtilityBillsSlidebar")}>Utility Bills</li>
                  <li onClick={() => navigateTo("RefundCreditCardSlidebar")}>Credit Card</li>
                  <li onClick={() => navigateTo("RefundUPISlidebar")}>UPI</li>
                </motion.ul>
              )}
            </AnimatePresence>

            {/* --- 3. Money Requests Dropdown --- */}
            <li 
              className="dropdown-title"
              onClick={() => setIsMoneyRequestsOpen(!isMoneyRequestsOpen)}
            >
              Money Requests ▾
            </li>
            <AnimatePresence>
              {isMoneyRequestsOpen && (
                <motion.ul
                  className="submenu"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <li onClick={() => navigateTo("AddNewRequestSlidebar")}>Add New Request</li>
                  <li onClick={() => navigateTo("PendingRequestsSlidebar")}>Pending Requests</li>
                  <li onClick={() => navigateTo("InCompleteRequestsSlidebar")}>InComplete Requests</li>
                  <li onClick={() => navigateTo("AllRequestsSlidebar")}>All Requests</li>
                </motion.ul>
              )}
            </AnimatePresence>

            {/* --- 4. Statements Dropdown --- */}
            <li 
              className="dropdown-title"
              onClick={() => setIsStatementsOpen(!isStatementsOpen)}
            >
              Statements ▾
            </li>
            <AnimatePresence>
              {isStatementsOpen && (
                <motion.ul
                  className="submenu"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <li onClick={() => navigateTo("AccountStatementSlidebar")}>Account Statement</li>
                  <li onClick={() => navigateTo("AEPSStatementSlidebar")}>AEPS Statement</li>
                  <li onClick={() => navigateTo("CreditDebitListSlidebar")}>Credit/Debit List</li>
                  <li onClick={() => navigateTo("SmartPayListSlidebar")}>Smart Pay List</li>
                </motion.ul>
              )}
            </AnimatePresence>

            {/* --- 5. Settlement Dropdown --- */}
            <li 
              className="dropdown-title"
              onClick={() => setIsSettlementOpen(!isSettlementOpen)}
            >
              Settlement ▾
            </li>
            <AnimatePresence>
              {isSettlementOpen && (
                <motion.ul
                  className="submenu"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <li onClick={() => navigateTo("AddBankAccountSlidebar")}>Add Bank Account</li>
                  <li onClick={() => navigateTo("AccountListSlidebar")}>Account List</li>
                </motion.ul>
              )}
            </AnimatePresence>

            {/* --- 6. Charges Slabs Dropdown --- */}
            <li 
              className="dropdown-title"
              onClick={() => setIsChargesSlabsOpen(!isChargesSlabsOpen)}
            >
              Charges Slabs ▾
            </li>
            <AnimatePresence>
              {isChargesSlabsOpen && (
                <motion.ul
                  className="submenu"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <li onClick={() => navigateTo("ChargesCommissionRatesSlidebar")}>
                    Charges/Commission Rates
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>


            <li className="section-title">Privacy & Settings</li>
            
            {/* --- 7. Configurations Dropdown (UPDATED) --- */}
            <li 
              className="dropdown-title" 
              onClick={() => setIsConfigurationsOpen(!isConfigurationsOpen)}
            >
              Configurations ▾
            </li>
            <AnimatePresence>
              {isConfigurationsOpen && (
                <motion.ul 
                  className="submenu"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <li onClick={() => navigateTo("CollectRequestOutletsSlidebar")}>Collect Request Outlets</li>
                  <li onClick={() => navigateTo("PrintBCCertificateSlidebar")}>Print BC Certificate</li>
                  <li onClick={() => navigateTo("PrintEssentialLetterSlidebar")}>Print Essential Letter</li>
                  <li onClick={() => navigateTo("PrintIDCardSlidebar")}>Print ID Card</li>
                  <li onClick={() => navigateTo("PrintInfoSlidebar")}>Print Info</li>
                </motion.ul>
              )}
            </AnimatePresence>
            
            {/* --- 8. Credentials Dropdown --- */}
            <li 
              className="dropdown-title" 
              onClick={() => setIsCredentialsOpen(!isCredentialsOpen)}
            >
              Credentials ▾
            </li>
            <AnimatePresence>
              {isCredentialsOpen && (
                <motion.ul 
                  className="submenu"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <li onClick={() => navigateTo("changepasswordSlidebar")}>Change Password</li>
                  <li onClick={() => navigateTo("changempinSlidebar")}>Change MPIN</li>
                </motion.ul>
              )}
            </AnimatePresence>
            
          </ul>
        </nav>

        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </motion.aside>
    </>
  );
};

export default DashboardHeaderSidebar;