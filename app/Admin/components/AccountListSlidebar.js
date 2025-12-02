"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import "./AccountListSlidebar.css";

const AccountList = () => {
  const [filters, setFilters] = useState({
    accountNo: "",
    status: "",
  });

  const [data, setData] = useState([]); // Empty for "No Records" state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    console.log("Searching Account List:", filters);
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
            <h2 className="page-title">AEPS Bank Accounts</h2>
            <p className="page-subtitle">
              View and Track aeps bank settlement accounts .
            </p>
          </motion.div>

          {/* --- Search Section --- */}
          <motion.div
            className="search-container"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="search-heading">Search Account</h4>
            <div className="search-controls">
              <input
                type="text"
                name="accountNo"
                className="search-input"
                placeholder="Account No"
                value={filters.accountNo}
                onChange={handleChange}
              />

              <select
                name="status"
                className="search-select"
                value={filters.status}
                onChange={handleChange}
              >
                <option value="">-Status-</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Pending">Pending</option>
              </select>

              <button className="btn-search-green" onClick={handleSearch}>
                Search
              </button>
            </div>
          </motion.div>

          {/* --- Data Table Section --- */}
          <motion.div
            className="data-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {data.length === 0 ? (
              <div className="no-records-bar">No Records Exists !</div>
            ) : (
              <table className="account-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Bank Name</th>
                    <th>Account No</th>
                    <th>IFSC</th>
                    <th>Holder Name</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>{/* Map data here */}</tbody>
              </table>
            )}
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default AccountList;