"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import DashboardHeaderSidebar from "../../Admin/DashboardHeaderSidebar";
import "../../css/AllTransactions.css";  

export default function UtilityTransactions() {
  const router = useRouter();
  const [adminName, setAdminName] = useState("");
  const today = new Date().toISOString().split("T")[0];
  const [showOverlay, setShowOverlay] = useState(false);
  const [dataVisible, setDataVisible] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [limit, setLimit] = useState(25);

  const [filters, setFilters] = useState({
    transactionNo: "",
    status: "",
    type: "",
    fromDate: today,
    toDate: today,
  });

  useEffect(() => {
    const name = localStorage.getItem("adminName");
    if (!name) {
      router.push("/Login");
    } else {
      setAdminName(name);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("adminName");
    router.push("/Login");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if ((name === "fromDate" || name === "toDate") && value.trim() === "") {
      newValue = today;
    }

    setFilters((prev) => ({ ...prev, [name]: newValue }));

    if (name === "transactionNo" && value.trim() === "") {
      setDataVisible(false);
      setFilteredData([]);
    }
  };

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

  const generateMockData = () => {
    const rows = [];
    for (let i = 1; i <= 200; i++) {
      rows.push({
        TransactionNo: `TXN${1000 + i}`,
        SenderMobile: `98${Math.floor(10000000 + Math.random() * 9000000)}`,
        SenderName: `Sender ${i}`,
        BeneName: `Receiver ${i}`,
        AccountNo: `10${Math.floor(1000000000 + Math.random() * 9000000000)}`,
        IFSC: `SBIN000${Math.floor(1000 + Math.random() * 9000)}`,
        Amount: (Math.random() * 10000).toFixed(2),
        Charges: (Math.random() * 50).toFixed(2),
        Commission: (Math.random() * 20).toFixed(2),
        TransType: ["IMPS", "NEFT", "UPI", "CARD"][Math.floor(Math.random() * 4)],
        UTRNo: `UTR${Math.floor(100000 + Math.random() * 900000)}`,
        Status: ["Success", "Failed", "Refunded", "Pending"][
          Math.floor(Math.random() * 4)
        ],
        Message: "Transaction processed successfully",
        CreatedDate: today,
        PostedDate: today,
      });
    }
    return rows;
  };

  const [tableData] = useState(generateMockData());

  const handleSearch = () => {
    const hasFilter =
      filters.transactionNo ||
      filters.status ||
      filters.type ||
      filters.fromDate !== today ||
      filters.toDate !== today;

    if (!hasFilter) {
      alert("Please apply at least one filter before searching.");
      return;
    }

    setShowOverlay(true);

    setTimeout(() => {
      let filtered = tableData;

      if (filters.transactionNo) {
        filtered = filtered.filter((r) =>
          r.TransactionNo.toLowerCase().includes(
            filters.transactionNo.toLowerCase()
          )
        );
      }

      if (filters.status) {
        filtered = filtered.filter((r) => r.Status === filters.status);
      }

      if (filters.type) {
        filtered = filtered.filter((r) => r.TransType === filters.type);
      }

      setFilteredData(filtered);
      setDataVisible(true);
      setShowOverlay(false);
    }, 1000);
  };

  const handleExport = () => {
    if (!dataVisible || filteredData.length === 0) {
      alert("No data available to export. Please search first.");
      return;
    }

    const csvRows = [];
    csvRows.push(tableHeaders.join(","));
    filteredData.forEach((row) => csvRows.push(Object.values(row).join(",")));

    const blob = new Blob([csvRows.join("\n")], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "Utility_Transactions.csv";
    a.click();
  };

  const summaryData = [
    { title: "Total Transactions", color: "linear-gradient(135deg, #4e73df, #1cc88a)" },
    { title: "Total Amount", color: "linear-gradient(135deg, #36b9cc, #6610f2)" },
    { title: "Total Charges", color: "linear-gradient(135deg, #f6c23e, #e74a3b)" },
    { title: "Total Commission", color: "linear-gradient(135deg, #00b4d8, #0077b6)" },
    { title: "Refund Pending", color: "linear-gradient(135deg, #dc3545, #ff6b6b)" },
    { title: "Total Refunded", color: "linear-gradient(135deg, #f0f0f2ff, #5e666eff)" },
  ];

  return (
    <div className="dashboard-container colorful-bg">
      <DashboardHeaderSidebar
        adminName={adminName}
        handleLogout={handleLogout}
      />

      <div className="main-row">
        <div className="sidebar-space" />
        <main className="main-content">

          <motion.h2
            className="money-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Utility Transfer Transactions
          </motion.h2>

          {/* Filters */}
          <motion.div className="card filter-card" whileHover={{ scale: 1.02 }}>
            <h3>Search Filters</h3>
            <div className="search-box">

              <input
                type="text"
                name="transactionNo"
                value={filters.transactionNo}
                onChange={handleChange}
                placeholder="Transaction No"
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
                <option value="CARD">Card</option>
              </select>

              <input type="date" name="fromDate" value={filters.fromDate} onChange={handleChange} />
              <input type="date" name="toDate" value={filters.toDate} onChange={handleChange} />

              <select value={limit} onChange={(e) => setLimit(+e.target.value)}>
                <option value={10}>Show 10</option>
                <option value={25}>Show 25</option>
                <option value={50}>Show 50</option>
                <option value={100}>Show 100</option>
              </select>

              <button onClick={handleSearch}>Search</button>
              <button onClick={handleExport}>Export</button>
            </div>
          </motion.div>

          {/* Summary */}
          <motion.div className="card summary-card-section">
            {summaryData.map((item, i) => (
              <motion.div
                key={i}
                className="summary-card"
                style={{ background: item.color }}
                whileHover={{ scale: 1.05 }}
              >
                <p>{item.title}</p>
                <h3>₹ {(Math.random() * 50000).toFixed(2)}</h3>
              </motion.div>
            ))}
          </motion.div>

          {/* Table */}
          <motion.div className="card table-card">
            <div className="transaction-table-container">
              <table>
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
                      <tr key={i}>
                        {Object.values(row).map((val, j) => (
                          <td key={j}>{val}</td>
                        ))}
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={tableHeaders.length}>
                        No data found. Try searching.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </motion.div>

        </main>
      </div>

      {/* Loading Overlay */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className="export-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="export-popup"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
            >
              <h3>Loading Data...</h3>
              <p>Please wait while your utility transactions load.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
