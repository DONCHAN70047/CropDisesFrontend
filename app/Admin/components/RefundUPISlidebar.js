"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import "./RefundUPISlidebar.css";

const RefundUPI = () => {
  const [transactionNo, setTransactionNo] = useState("");
  const [data, setData] = useState([]); // Empty array to simulate "No Records"
  
  // Mock Summary Data
  const summary = {
    pendingRequests: 0,
    pendingAmount: 0,
  };

  const handleSearch = () => {
    console.log("Searching for:", transactionNo);
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
            <h2 className="page-title">UPI Transfer Refund Pending</h2>
            <p className="page-subtitle">View and Claim your upi transfer refund.</p>
          </motion.div>

          {/* --- Control Bar (Cards + Search) --- */}
          <motion.div 
            className="control-bar"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Left: Summary Cards */}
            <div className="summary-cards-group">
              <div className="status-card purple-card">
                <div className="card-label">Total Pending Requests</div>
                <div className="card-value">{summary.pendingRequests}</div>
              </div>

              <div className="status-card purple-card">
                <div className="card-label">Total Pending Amount</div>
                <div className="card-value">₹ {summary.pendingAmount}</div>
              </div>
            </div>

            {/* Right: Search Box */}
            <div className="search-group">
              <input
                type="text"
                className="search-input"
                placeholder="Transaction No"
                value={transactionNo}
                onChange={(e) => setTransactionNo(e.target.value)}
              />
              <button className="search-btn-green" onClick={handleSearch}>
                Search
              </button>
            </div>
          </motion.div>

          {/* --- Data Area --- */}
          <motion.div 
            className="data-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {data.length === 0 ? (
              <div className="no-records-bar">
                No Records Exists !
              </div>
            ) : (
              <table className="refund-table">
                <thead>
                  <tr>
                     <th>Transaction No</th>
                     <th>Amount</th>
                     <th>Status</th>
                     <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Data mapping here */}
                </tbody>
              </table>
            )}
          </motion.div>

        </main>
      </div>
    </div>
  );
};

export default RefundUPI;