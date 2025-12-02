"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import "./AEPSStatementSlidebar.css";

const AEPSStatement = () => {
  const [filters, setFilters] = useState({
    fromDate: "2025-11-25",
    toDate: "2025-11-25",
  });

  const [availableBalance] = useState("0");

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

  // Mock Table Data
  const [data] = useState([
    {
      id: 1,
      date: "25-Nov-2025",
      time: "12:00:00 AM",
      refNo: "",
      narration: "Opening Balance",
      amount: "0",
      charge: "0",
      commission: "0",
      tds: "0",
      balance: "0",
    },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    console.log("Searching AEPS Statement:", filters);
  };

  const handleExport = () => {
    console.log("Exporting Data...");
  };

  const handleWithdrawSmart = () => {
      console.log("Withdraw to Smart Wallet");
  };

  const handleWithdrawBank = () => {
      console.log("Withdraw to Bank Account");
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
            <h2 className="page-title">AEPS Account Statement</h2>
            <p className="page-subtitle">View and Track summary of your aeps/matm/mpos credit/debit transactions daily basis .</p>
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
              
              <div className="withdraw-label">Withdraw Your Balance In</div>
              <div className="withdraw-buttons">
                  <button className="btn-smart-wallet" onClick={handleWithdrawSmart}>Smart Wallet</button>
                  <button className="btn-bank-account" onClick={handleWithdrawBank}>Bank Account</button>
              </div>
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
            <table className="aeps-table">
              <thead>
                <tr>
                  <th>S#</th>
                  <th>Date</th>
                  <th>Ref No</th>
                  <th>Narration</th>
                  <th>Amount</th>
                  <th>Charge</th>
                  <th>Commission</th>
                  <th>TDS</th>
                  <th>Balance</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <tr key={row.id} className="purple-row"> 
                    {/* Note: Screenshot shows purple row style for this entry */}
                    <td>{row.id}</td>
                    <td>
                      {row.date} <br />
                      <span className="time-small">{row.time}</span>
                    </td>
                    <td>{row.refNo}</td>
                    <td>{row.narration}</td>
                    <td className="red-bg-cell">{row.amount}</td>
                    <td className="red-bg-cell">{row.charge}</td>
                    <td className="red-bg-cell">{row.commission}</td>
                    <td className="red-bg-cell">{row.tds}</td>
                    <td>{row.balance}</td>
                    <td><button className="btn-msg">💬</button></td>
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

export default AEPSStatement;