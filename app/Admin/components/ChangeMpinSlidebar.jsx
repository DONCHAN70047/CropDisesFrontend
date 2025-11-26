"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "../../css/MoneyTransfer.css";
import { motion } from "framer-motion";
import { isProtected } from "../../utils/protectedRoute";

const ChangeMPIN = () => {

  // Copy
  const router = useRouter();
  const [adminName, setAdminName] = useState("");
  const [adminPhoto, setAdminPhoto] = useState("");

  const [otp, setOtp] = useState("");

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
  }, []); // Until this

  const handleVerify = () => {
    console.log("MPIN OTP:", otp);
    // Your verify OTP API logic here
  };

  const handleResend = () => {
    console.log("Resend MPIN OTP clicked");
    // Your resend OTP API logic here
  };

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
            Change MPIN
          </motion.h2>

          <p className="mt-subtitle">
            Update your current mpin to enhance security.
          </p>

          <motion.div
            className="money-transfer-container"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mt-cards-wrapper single-card-center">

              <motion.div
                className="mt-card otp-card"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="mt-title">Verify OTP</h3>

                <label className="mt-label">OTP</label>
                <input
                  type="text"
                  className="mt-input"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />

                <div className="mt-btn-row">
                  <button 
                    className="mt-btn verify-btn" 
                    onClick={handleVerify}
                  >
                    Verify
                  </button>

                  <button 
                    className="mt-btn resend-btn" 
                    onClick={handleResend}
                  >
                    Resend OTP
                  </button>
                </div>

              </motion.div>

            </div>
          </motion.div>

        </main>
      </div>
    </div>
  );
};

export default ChangeMPIN;
