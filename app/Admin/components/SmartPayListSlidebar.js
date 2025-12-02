"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import "./SmartPayListSlidebar.css";

const SmartPayList = () => {
  const [filters, setFilters] = useState({
    refNo: "",
    fromDate: "2025-11-25",
    toDate: "2025-11-25",
  });

  const [limit, setLimit] = useState(10);
  const [data, setData] = useState([]); // Empty for "No Records" state

  // Mock Summary Data
  const summary = {
    totalTransactions: 0,
    totalAmount: 0,
    totalCharges: 0,
    amountPaid: 0,
    amountCollect: 0,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    console.log("Searching Smart Pay/Collect History:", filters);
  };

  const handleExport = () => {
    console.log("Exporting Data...");
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
            <h2 className="page-title">Smart Pay/Collect History</h2>
            <p className="page-subtitle">
              View and Track summary of your smart pay and collect transactions daily basis .
            </p>
          </motion.div>

          {/* --- Search Section --- */}
          <motion.div
            className="search-section-container"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="section-heading">Search Transactions</h4>
            <div className="search-filters-row">
              <input
                type="text"
                name="refNo"
                className="filter-input-wide"
                placeholder="Ref No/Mobile No"
                value={filters.refNo}
                onChange={handleChange}
              />

              <input
                type="date"
                name="fromDate"
                className="filter-date"
                value={filters.fromDate}
                onChange={handleChange}
              />

              <input
                type="date"
                name="toDate"
                className="filter-date"
                value={filters.toDate}
                onChange={handleChange}
              />

              <button className="btn-search-green" onClick={handleSearch}>
                Search
              </button>
              <button className="btn-export-orange" onClick={handleExport}>
                Export
              </button>
            </div>
          </motion.div>

          {/* --- Summary Cards Row --- */}
          <motion.div
            className="summary-grid-five"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            {/* Card 1 */}
            <div className="summary-box purple-gradient">
              <div className="box-label">Total Transactions</div>
              <div className="box-value">{summary.totalTransactions}</div>
            </div>
            {/* Card 2 */}
            <div className="summary-box purple-gradient">
              <div className="box-label">Total Amount</div>
              <div className="box-value">₹ {summary.totalAmount}</div>
            </div>
            {/* Card 3 */}
            <div className="summary-box purple-gradient">
              <div className="box-label">Total Charges</div>
              <div className="box-value">₹ {summary.totalCharges}</div>
            </div>
            {/* Card 4 */}
            <div className="summary-box purple-gradient">
              <div className="box-label">Amount Paid</div>
              <div className="box-value">₹ {summary.amountPaid}</div>
            </div>
             {/* Card 5 */}
             <div className="summary-box purple-gradient">
              <div className="box-label">Amount Collect</div>
              <div className="box-value">₹ {summary.amountCollect}</div>
            </div>
          </motion.div>

          {/* --- Data Table Section --- */}
          <motion.div
            className="table-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Top Pagination Control */}
            <div className="entries-control">
              <span>Showing </span>
              <select
                value={limit}
                onChange={(e) => setLimit(e.target.value)}
                className="entries-select"
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
              <span> Entries</span>
            </div>

            {/* Table Area */}
            <div className="data-display-area">
              {data.length === 0 ? (
                <div className="no-records-message">No Records Exists !</div>
              ) : (
                <table className="main-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Ref No</th>
                      <th>Mobile</th>
                      <th>Amount</th>
                      <th>Type</th>
                      <th>Status</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>{/* Map data here */}</tbody>
                </table>
              )}
            </div>

            {/* Bottom Pagination Buttons */}
            <div className="pagination-controls">
              <button className="page-btn">{"<<"}</button>
              <button className="page-btn">{"<"}</button>
              
              <span className="goto-label">Go To</span>
              <select className="goto-select">
                  <option value="1">1</option>
              </select>

              <button className="page-btn">{">"}</button>
              <button className="page-btn">{">>"}</button>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default SmartPayList;