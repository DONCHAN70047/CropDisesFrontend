"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import "./InCompleteRequestsSlidebar.css";

const InCompleteRequests = () => {
  const [filters, setFilters] = useState({
    requestNo: "",
    fromDate: "2025-11-24", 
    toDate: "2025-11-25"
  });

  const [data, setData] = useState([]); // Empty array for "No Records" state
  
  // Mock Summary Data
  const summary = {
    totalRequests: 0,
    totalAmount: 0,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    console.log("Searching InComplete Requests:", filters);
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
            <h2 className="page-title">InComplete Fund Requests</h2>
            <p className="page-subtitle">View you all your InComplete fund requests and Update Correct Details.</p>
          </motion.div>

          {/* --- Control Bar --- */}
          <motion.div 
            className="control-bar"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Left: Summary Cards */}
            <div className="summary-cards-group">
              <div className="status-card purple-card">
                <div className="card-label">Total InComplete Requests</div>
                <div className="card-value">{summary.totalRequests}</div>
              </div>

              <div className="status-card purple-card">
                <div className="card-label">Total InComplete Amount</div>
                <div className="card-value">₹ {summary.totalAmount}</div>
              </div>
            </div>

            {/* Right: Search Group */}
            <div className="search-group">
              <input
                type="text"
                name="requestNo"
                className="search-input"
                placeholder="Request No"
                value={filters.requestNo}
                onChange={handleChange}
              />
              
              <input 
                type="date"
                name="fromDate"
                className="date-input"
                value={filters.fromDate}
                onChange={handleChange}
              />

              <input 
                type="date"
                name="toDate"
                className="date-input"
                value={filters.toDate}
                onChange={handleChange}
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
              <table className="data-table">
                <thead>
                  <tr>
                     <th>Request No</th>
                     <th>Date</th>
                     <th>Amount</th>
                     <th>Status</th>
                     <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Data Mapping Here */}
                </tbody>
              </table>
            )}
          </motion.div>

        </main>
      </div>
    </div>
  );
};

export default InCompleteRequests;