import React, { useEffect, useState } from "react";
import "./MoneyTransfer.css";
import DashboardHeaderSidebar from "../DashboardHeaderSidebar";
import { motion } from "framer-motion";

const MoneyTransfer3 = () => {
  const [adminName, setAdminName] = useState("");
  const [adminPhoto, setAdminPhoto] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("adminName");
    localStorage.removeItem("adminPhoto");
    window.location.href = "/Login";
  };

  useEffect(() => {
    const name = localStorage.getItem("adminName");
    const photo = localStorage.getItem("adminPhoto");

    if (!name) {
      window.location.href = "/Login";
    } else {
      setAdminName(name);
      setAdminPhoto(photo);
    }
  }, []);

  return (
    <div className="dashboard-container colorful-bg">

      {/* HEADER + SIDEBAR */}
      <DashboardHeaderSidebar
        adminName={adminName}
        adminPhoto={adminPhoto}
        handleLogout={handleLogout}
      />

      <div className="main-row">
        
        {/* Fixed Sidebar Gap */}
        <div className="sidebar-space" />

        {/* MAIN CONTENT */}
        <main className="main-content">

          <motion.h2
            className="mt-main-title"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
             Money Transfer 3
          </motion.h2>

          <motion.div
            className="money-transfer-container"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mt-cards-wrapper">

              {/* Sender Card */}
              <motion.div
                className="mt-card"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="mt-title">🔍 Search Sender Mobile No</h3>

                <label className="mt-label">10 Digit Mobile No</label>
                <input
                  type="text"
                  className="mt-input"
                  placeholder="Enter mobile number"
                />

                <button className="mt-btn">Search</button>
              </motion.div>

              {/* Beneficiary Card */}
              <motion.div
                className="mt-card"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="mt-title">🏦 Search Beneficiary Account No</h3>

                <label className="mt-label">Account No</label>
                <input
                  type="text"
                  className="mt-input"
                  placeholder="Enter account number"
                />

                <button className="mt-btn">Search</button>
              </motion.div>

            </div>
          </motion.div>

        </main>
      </div>
    </div>
  );
};

export default MoneyTransfer3;
