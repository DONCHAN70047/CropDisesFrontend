"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import "./AllRequestsSlidebar.css";

const AllRequests = () => {
  const [filters, setFilters] = useState({
    type: "",
    status: "",
    requestNo: "",
    fromDate: "2025-11-25",
    toDate: "2025-11-25",
  });

  const [limit, setLimit] = useState(10);
  const [data, setData] = useState([]); // Empty for "No Records" state

  // Mock Summary Data
  const summary = {
    totalRequests: 0,
    totalAmount: 0,
    cashCheque: 0,
    impsNeftRtgs: 0,
    cdm: 0,
    online: 0,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    console.log("Searching All Requests:", filters);
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
            <h2 className="page-title">All Fund Requests List</h2>
            <p className="page-subtitle">
              View and Track summary of your fund requests daily basis .
            </p>
          </motion.div>

          {/* --- Search Section --- */}
          <motion.div
            className="search-section-container"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="section-heading">Search Requests</h4>
            <div className="search-filters-row">
              <select
                name="type"
                className="filter-select"
                value={filters.type}
                onChange={handleChange}
              >
                <option value="">-Type-</option>
                <option value="IMPS">IMPS</option>
                <option value="NEFT">NEFT</option>
                <option value="CASH">CASH</option>
              </select>

              <select
                name="status"
                className="filter-select"
                value={filters.status}
                onChange={handleChange}
              >
                <option value="">-Status-</option>
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>

              <input
                type="text"
                name="requestNo"
                className="filter-input"
                placeholder="Request No"
                value={filters.requestNo}
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

              <button className="btn-search" onClick={handleSearch}>
                Search
              </button>
              <button className="btn-export" onClick={handleExport}>
                Export
              </button>
            </div>
          </motion.div>

          {/* --- Summary Cards Row --- */}
          <motion.div
            className="summary-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            {/* Card 1 */}
            <div className="summary-box purple-gradient">
              <div className="box-label">Total Requests</div>
              <div className="box-value">₹ {summary.totalRequests}</div>
            </div>
            {/* Card 2 */}
            <div className="summary-box purple-gradient">
              <div className="box-label">Total Amount</div>
              <div className="box-value">₹ {summary.totalAmount}</div>
            </div>
            {/* Card 3 */}
            <div className="summary-box purple-gradient">
              <div className="box-label">CASH/CHEQUE</div>
              <div className="box-value">₹ {summary.cashCheque}</div>
            </div>
            {/* Card 4 */}
            <div className="summary-box purple-gradient">
              <div className="box-label">IMPS/NEFT/RTGS</div>
              <div className="box-value">₹ {summary.impsNeftRtgs}</div>
            </div>
            {/* Card 5 */}
            <div className="summary-box purple-gradient">
              <div className="box-label">CDM</div>
              <div className="box-value">₹ {summary.cdm}</div>
            </div>
            {/* Card 6 */}
            <div className="summary-box purple-gradient">
              <div className="box-label">Online</div>
              <div className="box-value">₹ {summary.online}</div>
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
                      <th>Request No</th>
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

export default AllRequests;