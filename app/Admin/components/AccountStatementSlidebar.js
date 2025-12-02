"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import "./AccountStatementSlidebar.css";

const AccountStatement = () => {
  const [filters, setFilters] = useState({
    fromDate: "2025-11-25",
    toDate: "2025-11-25",
  });

  const [availableBalance] = useState("90.179999999993");
  const [holdBalance] = useState("0");

  // Mock Summary Data
  const summary = {
    totalCredited: 0,
    totalDebited: 0,
    amountCredited: 0,
    amountDebited: 0,
    chargesDebited: 0,
    chargesRefunded: 0,
    commissionCredited: 0,
    commissionDebited: 0,
    tdsDebited: 0,
    tdsReversed: 0,
  };

  // Mock Table Data (Matches screenshot)
  const [data] = useState([
    {
      id: 1,
      date: "25-Nov-2025",
      time: "12:00:00 AM",
      refNo: "",
      narration: "Opening Balance",
      category: "",
      credit: 0,
      debit: 0,
      balance: "253995.02",
    },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    console.log("Searching Account Statement:", filters);
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
            className="page-header-row"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h2 className="page-title">Account Statement</h2>
            </div>
            <button className="btn-advance-search">🔍 Advance Search</button>
          </motion.div>

          {/* --- Balance & Filter Section --- */}
          <motion.div
            className="balance-filter-container"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Left: Balance Box */}
            <div className="balance-display-box">
              <div className="balance-label">Your Available Balance</div>
              <div className="balance-amount">₹ {availableBalance}</div>
              <div className="hold-label">Hold Balance : ₹ {holdBalance}</div>
            </div>

            {/* Right: Date Filters */}
            <div className="filter-controls">
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

          {/* --- Summary Grid (Colored Blocks) --- */}
          <motion.div
            className="summary-blocks-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            {/* Row 1 */}
            <div className="block green-block">
              <div className="block-label">Total Amount Credited</div>
              <div className="block-value">₹ {summary.totalCredited}</div>
            </div>
            <div className="block red-block">
              <div className="block-label">Total Amount Debited</div>
              <div className="block-value">₹ {summary.totalDebited}</div>
            </div>
            <div className="block green-block">
              <div className="block-label">Amount Credited</div>
              <div className="block-value">₹ {summary.amountCredited}</div>
            </div>
            <div className="block red-block">
              <div className="block-label">Amount Debited</div>
              <div className="block-value">₹ {summary.amountDebited}</div>
            </div>
            <div className="block red-block">
              <div className="block-label">Charges Debited</div>
              <div className="block-value">₹ {summary.chargesDebited}</div>
            </div>
            <div className="block green-block">
              <div className="block-label">Charges Refunded</div>
              <div className="block-value">₹ {summary.chargesRefunded}</div>
            </div>

            {/* Row 2 */}
            <div className="block green-block">
              <div className="block-label">Commission Credited</div>
              <div className="block-value">₹ {summary.commissionCredited}</div>
            </div>
            <div className="block red-block">
              <div className="block-label">Commission Debited</div>
              <div className="block-value">₹ {summary.commissionDebited}</div>
            </div>
            <div className="block red-block">
              <div className="block-label">TDS Debited</div>
              <div className="block-value">₹ {summary.tdsDebited}</div>
            </div>
            <div className="block green-block">
              <div className="block-label">TDS Reversed</div>
              <div className="block-value">₹ {summary.tdsReversed}</div>
            </div>
          </motion.div>

          {/* --- Data Table --- */}
          <motion.div
            className="table-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <table className="statement-table">
              <thead>
                <tr>
                  <th>S#</th>
                  <th>Date</th>
                  <th>Ref No</th>
                  <th>Narration</th>
                  <th>Category</th>
                  <th>Credit</th>
                  <th>Debit</th>
                  <th>Balance</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>
                      {row.date} <br />
                      <span className="time-small">{row.time}</span>
                    </td>
                    <td>{row.refNo}</td>
                    <td>{row.narration}</td>
                    <td>{row.category}</td>
                    <td>{row.credit}</td>
                    <td>{row.debit}</td>
                    <td>{row.balance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default AccountStatement;