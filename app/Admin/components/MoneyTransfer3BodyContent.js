"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import "../../css/MoneyTransfer.css";
import { isProtected } from "../../utils/protectedRoute";

export default function MoneyTransfer3() {
  // LOAD ADMIN DATA
  {/* Copy */}
    const router = useRouter();
    const [adminName, setAdminName] = useState("");
    const [adminPhoto, setAdminPhoto] = useState("");
    const handleLogout = () => {
      localStorage.removeItem("adminName");
      localStorage.removeItem("adminPhoto");
      router.push("/login");
    };
    useEffect(() => {
      if (!isProtected()) {
        router.push("/login");
      } else {
        const storedName = localStorage.getItem("adminName");
        const storedPhoto = localStorage.getItem("adminPhoto");
  
        if (storedName) setAdminName(storedName);
        if (storedPhoto) setAdminPhoto(storedPhoto);
      }
    }, []);   {/* Untill this */}

  return (
    <div className="dashboard-container colorful-bg">

      <div className="main-row">

        {/* Sidebar Gap */}
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
                <h3 className="mt-title">Search Sender Mobile No</h3>

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
                <h3 className="mt-title">Search Beneficiary Account No</h3>

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
}
