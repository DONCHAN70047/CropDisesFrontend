"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../css/MoneyTransfer.css";
import { DataSearchMoneyTransfer } from "./action/MoneyTransferTransactionsSlidebarDataSearch";

const MoneyTransferTransactionsSlidebar = () => {
  const today = new Date().toISOString().split("T")[0];

  const [showOverlay, setShowOverlay] = useState(false);
  const [dataVisible, setDataVisible] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [limit, setLimit] = useState(25);

  const [summaryValues, setSummaryValues] = useState({
    totalTransactions: 0,
    totalAmount: 0,
    totalCharges: 0,
    totalCommission: 0,
    refundPending: 0,
    totalRefunded: 0,
  });

  const [filters, setFilters] = useState({
    transactionNo: "",
    status: "",
    type: "",
    fromDate: today,
    toDate: today,
  });

  const tableHeaders = [
    "TransactionNo",
    "SenderMobile",
    "SenderName",
    "BeneName",
    "AccountNo",
    "IFSC",
    "Amount",
    "Charges",
    "Commission",
    "TransType",
    "UTRNo",
    "Status",
    "Message",
    "CreatedDate",
    "PostedDate",
  ];

  // ====================== HANDLE INPUT CHANGE ======================
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  // ====================== SUMMARY CALCULATION ======================
  const calculateSummary = (data) => {
    const summary = {
      totalTransactions: data.length,
      totalAmount: 0,
      totalCharges: 0,
      totalCommission: 0,
      refundPending: 0,
      totalRefunded: 0,
    };

    data.forEach((item) => {
      summary.totalAmount += Number(item.Amount || 0);
      summary.totalCharges += Number(item.Charges || 0);
      summary.totalCommission += Number(item.Commission || 0);

      if (item.Status === "Pending") {
        summary.refundPending += Number(item.Amount || 0);
      }

      if (item.Status === "Refunded") {
        summary.totalRefunded += Number(item.Amount || 0);
      }
    });

    setSummaryValues(summary);
  };

  // ====================== SEARCH FUNCTION ======================
  const handleSearch = async () => {
    setShowOverlay(true);

    try {
      const result = await DataSearchMoneyTransfer({
        transactionNo: filters.transactionNo,
        status: filters.status,
        type: filters.type,
        startDate: filters.fromDate,
        endDate: filters.toDate,
      });

      if (result.status === 200) {
        setFilteredData(result.data);
        setDataVisible(true);

        // Calculate summary values
        calculateSummary(result.data);

        if (result.data.length === 0) {
          alert("No Data Found");
        }
      } else {
        alert("Server Error");
      }
    } catch (err) {
      alert("Server Error");
    }

    setShowOverlay(false);
  };

  // ====================== EXPORT CSV ======================
  const handleExport = () => {
    if (!dataVisible || filteredData.length === 0) {
      alert("⚠️ No data to export.");
      return;
    }

    const csvRows = [tableHeaders.join(",")];

    filteredData.forEach((row) => {
      csvRows.push(
        tableHeaders.map((h) => JSON.stringify(row[h] || "")).join(",")
      );
    });

    const blob = new Blob([csvRows.join("\n")], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "MoneyTransfer_Transactions.csv";
    a.click();
  };

  return (
    <div className="dashboard-container colorful-bg">
      <div className="main-row">
        <div className="sidebar-space" />

        <main className="main-content">
          <motion.h2
            className="money-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            UPI Transfer Transactions
          </motion.h2>

          {/* ======================= FILTER CARD ======================= */}
          <motion.div className="card filter-card">
            <h3>🔍 Search Filters</h3>

            <div className="search-box">
              <input
                type="text"
                name="transactionNo"
                placeholder="Transaction No"
                value={filters.transactionNo}
                onChange={handleChange}
              />

              <select name="status" value={filters.status} onChange={handleChange}>
                <option value="">- Status -</option>
                <option value="Success">Success</option>
                <option value="Failed">Failed</option>
                <option value="Pending">Pending</option>
                <option value="Refunded">Refunded</option>
              </select>

              <select name="type" value={filters.type} onChange={handleChange}>
                <option value="">- Type -</option>
                <option value="IMPS">IMPS</option>
                <option value="NEFT">NEFT</option>
                <option value="UPI">UPI</option>
                <option value="CARD">CARD</option>
              </select>

              <input
                type="date"
                name="fromDate"
                value={filters.fromDate}
                onChange={handleChange}
              />

              <input
                type="date"
                name="toDate"
                value={filters.toDate}
                onChange={handleChange}
              />

              <select
                className="limit-select"
                value={limit}
                onChange={(e) => setLimit(Number(e.target.value))}
              >
                <option value={10}>Show 10</option>
                <option value={25}>Show 25</option>
                <option value={50}>Show 50</option>
                <option value={100}>Show 100</option>
              </select>

              <button className="search-btn" onClick={handleSearch}>
                🔎 Search
              </button>

              <button className="export-btn" onClick={handleExport}>
                📤 Export
              </button>
            </div>
          </motion.div>

          {/* ======================= SUMMARY ======================= */}
          <motion.div className="card summary-card-section">
            <motion.div className="summary-card">
              <p>Total Transactions</p>
              <h3>₹ {summaryValues.totalTransactions}</h3>
            </motion.div>

            <motion.div className="summary-card">
              <p>Total Amount</p>
              <h3>₹ {summaryValues.totalAmount.toFixed(2)}</h3>
            </motion.div>

            <motion.div className="summary-card">
              <p>Total Charges</p>
              <h3>₹ {summaryValues.totalCharges.toFixed(2)}</h3>
            </motion.div>

            <motion.div className="summary-card">
              <p>Total Commission</p>
              <h3>₹ {summaryValues.totalCommission.toFixed(2)}</h3>
            </motion.div>

            <motion.div className="summary-card">
              <p>Refund Pending</p>
              <h3>₹ {summaryValues.refundPending.toFixed(2)}</h3>
            </motion.div>

            <motion.div className="summary-card">
              <p>Total Refunded</p>
              <h3>₹ {summaryValues.totalRefunded.toFixed(2)}</h3>
            </motion.div>
          </motion.div>

          {/* ======================= TABLE ======================= */}
          <motion.div className="card table-card">
            <div className="transaction-table-container">
              <table className="transaction-table">
                <thead>
                  <tr>
                    {tableHeaders.map((h, i) => (
                      <th key={i}>{h}</th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {dataVisible && filteredData.length > 0 ? (
                    filteredData.slice(0, limit).map((row, i) => (
                      <motion.tr key={i}>
                        {tableHeaders.map((h, j) => (
                          <td key={j}>{row[h] ?? ""}</td>
                        ))}
                      </motion.tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={tableHeaders.length} className="no-data">
                        No data found. Try searching!
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </motion.div>
        </main>
      </div>

      {/* ======================= LOADING OVERLAY ======================= */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div className="export-overlay" animate={{ opacity: 1 }}>
            <motion.div className="export-popup">
              <h3>📊 Loading Data...</h3>
              <p>Please wait while fetching transactions.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MoneyTransferTransactionsSlidebar;
