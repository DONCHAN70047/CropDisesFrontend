"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import "../AdminDashboard.css";
import DashboardHeaderSidebar from "../DashboardHeaderSidebar";
import { motion } from "framer-motion";
import { clear_refresh_cookie } from "../functions";
import { useUserContext } from "../../utils/context/user_context";
import { isProtected } from "../../utils/protectedRoute";

const Dashboard = ({ adminName }) => {

  const router = useRouter();
  const { user, setUser } = useUserContext();

  const [name, setName] = useState(adminName || "");
  const [adminPhoto, setAdminPhoto] = useState("");
  const [walletBalance, setWalletBalance] = useState("0.00");

  // Navigate with query panel
  const navigateTo = (panelName) => {
    router.push(`/Admin?panel=${panelName}`);
  };

  // SERVICES DATA
  const services = [
    { 
      label: "Royel Payout",
      icon: "https://cdn-icons-png.flaticon.com/512/2920/2920323.png",
      onClick: () => navigateTo("RoyelPayoutBodyContent") 
    },
    { label: "Money Transfer 3", icon: "/TrasferPic.png", onClick: () => navigateTo("MoneyTransfer3BodyContent")  },
    { label: "PPI Transfer", icon: "https://cdn-icons-png.flaticon.com/512/2920/2920323.png", onClick: () => navigateTo("MoneyTransfer3BodyContent") },
    { label: "UPI Transfer", icon: "https://cdn-icons-png.flaticon.com/512/2920/2920323.png", onClick: () => navigateTo("MoneyTransfer3BodyContent") },
    { label: "Smart Pay", icon: "/SmartPayPic.png", onClick: () => navigateTo("MoneyTransfer3BodyContent") },
    { label: "Bill Payment", icon: "/BillPaymentPic.png", onClick: () => navigateTo("MoneyTransfer3BodyContent") },
    { label: "Prepaid Recharge", icon: "https://cdn-icons-png.flaticon.com/512/2920/2920323.png", onClick: () => navigateTo("MoneyTransfer3BodyContent") },
    { label: "Postpaid Bill", icon: "/PostpaidRechargePic.png", onClick: () => navigateTo("MoneyTransfer3BodyContent") },
    { label: "DTH", icon: "https://cdn-icons-png.flaticon.com/512/2920/2920323.png", onClick: () => navigateTo("MoneyTransfer3BodyContent") },
    { label: "AEPS Withdraw 1", icon: "/AEPSPic.png", onClick: () => navigateTo("MoneyTransfer3BodyContent") },
    { label: "AEPS Withdraw 2", icon: "/AEPSPic.png", onClick: () => navigateTo("MoneyTransfer3BodyContent") },
    { label: "Flight Ticket", icon: "https://cdn-icons-png.flaticon.com/512/2920/2920323.png", onClick: () => navigateTo("MoneyTransfer3BodyContent") },
    { label: "OTT Subscription", icon: "/OTTPic.png", onClick: () => navigateTo("MoneyTransfer3BodyContent") },
    { label: "Pay Credit Card Bills", icon: "/PayCreditCardBills.png", onClick: () => navigateTo("MoneyTransfer3BodyContent") },
  ];

  // Recent Transactions
  const recentTransactions = [
    { amount: 1100, label: "Money Transfer", date: "28 Mar 25 04:40 PM", id: "2803202512833" },
    { amount: 0, label: "Verification", date: "28 Mar 25 04:40 PM", id: "2803202512812" },
    { amount: 1000, label: "Money Transfer", date: "28 Mar 25 04:36 PM", id: "2803202512668" },
    { amount: 1000, label: "Money Transfer", date: "11 Mar 25 06:38 PM", id: "1103202518078" },
  ];

  return (
    <div className="main-row">
      <div className="sidebar-space" />

      <motion.main
        className="main-content"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <header className="app-header">
          <img
            src={
              adminPhoto ||
              "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            }
            alt="User Avatar"
            className="header-profile-img"
          />

          <div className="company-info">
            <div className="company-name">
              ISHMART TECHNOLOGLOB SERVICE PVT LTD
            </div>
            <div className="company-sub">
              Smart Retailer - 9547783824 - SBR38904
            </div>
          </div>

          <div className="balance-info">
            <div className="opening-balance">
              <div>Opening Balance</div>
              <div>₹ 000000.00</div>
            </div>

            <div className="available-balance">
              <div>Available Balance</div>
              <div>₹ {walletBalance}</div>
            </div>
          </div>
        </header>

        {/* Marquee */}
        <div className="alert-marquee">
          <div className="marquee-text">
            कृपया BSES और Tata Power के लिए ₹ 1,00,000 से अधिक के बिजली बिल न भेजें 🙏 ||
            Do not send bills over ₹1,00,000 for BSES and Tata Power 🙏
          </div>
        </div>

        {/* Services */}
        <section className="services-section">
          <div className="services-grid">
            {services.map((service, i) => (
              <motion.div
                className="service-card"
                key={i}
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  if (service.onClick) service.onClick(); 
                  else if (service.route) router.push(service.route);
                }}
                style={{
                  cursor: service.route || service.onClick ? "pointer" : "default",
                }}
              >
                <img src={service.icon} alt={service.label} />
                <p>{service.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Recent Transactions */}
        <section className="summary-transactions-section">
          <div className="recent-transactions">
            <h3>Recent Transactions</h3>
            <ul>
              {recentTransactions.map((txn, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  - ₹ {txn.amount} {txn.label} <br />
                  <small>{txn.date} @ {txn.id}</small>
                </motion.li>
              ))}
            </ul>
          </div>
          <br /><br />
        </section>
      </motion.main>
    </div>
  );
};

export default Dashboard;
