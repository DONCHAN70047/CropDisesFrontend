"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import "./AddNewRequestSlidebar.css";

const AddNewRequest = () => {
  const [formData, setFormData] = useState({
    paymentType: "",
    paymentDate: "",
    bankAccount: "",
    amount: "",
    narration: "",
    receipt: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, receipt: e.target.files[0] }));
  };

  const handleSubmit = () => {
    console.log("Submitting Fund Request:", formData);
    alert("Request Submitted (Console Log)");
  };

  const handleCancel = () => {
    setFormData({
        paymentType: "",
        paymentDate: "",
        bankAccount: "",
        amount: "",
        narration: "",
        receipt: null
    });
  };

  return (
    <div className="dashboard-container colorful-bg">
      <div className="main-row">
        {/* Sidebar Placeholder */}
        <div className="sidebar-space" />

        <main className="main-content">
          
          {/* --- Page Header --- */}
          <motion.div 
            className="page-header-container"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="page-title">Add Fund Request</h2>
            <p className="page-subtitle">Add Your Fund Request with Correct Bank Details.</p>
          </motion.div>

          {/* --- Notification Bar --- */}
          <motion.div 
            className="notification-bar"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
             <marquee behavior="scroll" direction="left" className="scrolling-text">
                Note: Please upload valid receipt. Charges may apply. <span className="red-highlight">1%+Gst Charge on Cash Deposit</span>
             </marquee>
          </motion.div>

          {/* --- Form Container --- */}
          <div className="fund-request-grid">
            
            {/* Left Card: Details & Upload */}
            <motion.div 
              className="form-card"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
               <div className="form-group-row">
                 <div className="form-group half-width">
                    <label>Payment Type</label>
                    <select 
                        name="paymentType" 
                        value={formData.paymentType} 
                        onChange={handleChange}
                        className="form-select"
                    >
                        <option value="">-Select-</option>
                        <option value="IMPS">IMPS</option>
                        <option value="NEFT">NEFT</option>
                        <option value="RTGS">RTGS</option>
                        <option value="UPI">UPI</option>
                        <option value="CASH">Cash Deposit</option>
                    </select>
                 </div>

                 <div className="form-group half-width">
                    <label>Payment Date :</label>
                    <input 
                        type="date" 
                        name="paymentDate"
                        value={formData.paymentDate}
                        onChange={handleChange}
                        className="form-input"
                    />
                 </div>
               </div>

               <div className="form-group">
                  <label>Bank Account</label>
                  <select 
                        name="bankAccount" 
                        value={formData.bankAccount} 
                        onChange={handleChange}
                        className="form-select"
                    >
                        <option value="">-Select-</option>
                        <option value="SBI">SBI - 1234567890</option>
                        <option value="HDFC">HDFC - 0987654321</option>
                        <option value="ICICI">ICICI - 1122334455</option>
                    </select>
               </div>

               <div className="form-group">
                  <label>Upload Receipt :</label>
                  <div className="file-input-wrapper">
                      <input 
                        type="file" 
                        onChange={handleFileChange}
                        className="custom-file-input"
                      />
                  </div>
               </div>
            </motion.div>

            {/* Right Card: Amount & Submit */}
            <motion.div 
              className="form-card center-content-card"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
                <div className="amount-section">
                    <label className="center-label">Enter Amount</label>
                    <div className="amount-input-group">
                        <span className="currency-symbol">₹</span>
                        <input 
                            type="number" 
                            name="amount"
                            value={formData.amount}
                            onChange={handleChange}
                            className="amount-input"
                        />
                    </div>
                </div>

                <div className="form-group full-width">
                    <label>Bank Narration :</label>
                    <input 
                        type="text" 
                        name="narration"
                        value={formData.narration}
                        onChange={handleChange}
                        className="form-input"
                    />
                </div>

                <div className="button-group">
                    <button className="btn-submit" onClick={handleSubmit}>
                        ✓ Submit
                    </button>
                    <button className="btn-cancel" onClick={handleCancel}>
                        ✕ Cancel
                    </button>
                </div>
            </motion.div>

          </div>

        </main>
      </div>
    </div>
  );
};

export default AddNewRequest;