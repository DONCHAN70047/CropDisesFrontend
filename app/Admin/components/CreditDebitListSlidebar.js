"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import "./CreditDebitListSlidebar.css";

const CreditDebitList = () => {
  const [filters, setFilters] = useState({
    refNo: "",
    type: "",
    status: "",
    fromDate: "2025-11-25",
    toDate: "2025-11-25",
  });

  const [limit, setLimit] = useState(10);
  const [data, setData] = useState([]); // Empty for "No Records" state

  // Mock Summary Data
  const summary = {
    totalTransactions: 0,
    totalAmount: 0,
    totalCredit: 0,
    totalDebit: 0,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    console.log("Searching Credit/Debit List:", filters);
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
            <h2 className="page-title">Credit/Debit Balance Summary</h2>
            <p className="page-subtitle">
              View and Track summary of your credit/debit transactions daily basis .
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
                className="filter-input"
                placeholder="Ref No"
                value={filters.refNo}
                onChange={handleChange}
              />

              <select
                name="type"
                className="filter-select"
                value={filters.type}
                onChange={handleChange}
              >
                <option value="">-Type-</option>
                <option value="Credit">Credit</option>
                <option value="Debit">Debit</option>
              </select>

              <select
                name="status"
                className="filter-select"
                value={filters.status}
                onChange={handleChange}
              >
                <option value="">-Status-</option>
                <option value="Success">Success</option>
                <option value="Pending">Pending</option>
                <option value="Failed">Failed</option>
              </select>

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
            className="summary-grid-four"
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
              <div className="box-label">Total Credit</div>
              <div className="box-value">₹ {summary.totalCredit}</div>
            </div>
            {/* Card 4 */}
            <div className="summary-box purple-gradient">
              <div className="box-label">Total Debit</div>
              <div className="box-value">₹ {summary.totalDebit}</div>
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
                      <th>Type</th>
                      <th>Amount</th>
                      <th>Date</th>
                      <th>Status</th>
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

export default CreditDebitList;