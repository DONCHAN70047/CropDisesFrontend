"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./SmartSummary.css"; // We will create this below
import { motion } from "framer-motion";
import { isProtected } from "../../utils/protectedRoute"; // Adjust path if needed

const SmartSummary = () => {
  const router = useRouter();

  // Admin Data (State kept for consistency with your structure)
  const [adminName, setAdminName] = useState("");
  const [adminPhoto, setAdminPhoto] = useState("");

  // Date Filters
  const [fromDate, setFromDate] = useState("2025-11-25");
  const [toDate, setToDate] = useState("2025-11-25");

  // Mock Data matching the screenshot
  const reportData = [
    { category: "Money Transfer", count: 0, total: 0, success: 0, pending: 0, failed: 0 },
    { category: "UPI Transfer", count: 0, total: 0, success: 0, pending: 0, failed: 0 },
    { category: "Utility Payments", count: 0, total: 0, success: 0, pending: 0, failed: 0 },
    { category: "AEPS/MATM/Aadhar Pay", count: 0, total: 0, success: 0, pending: 0, failed: 0 },
    { category: "Credit Card Bills", count: 0, total: 0, success: 0, pending: 0, failed: 0 },
    // Empty row for visual spacing if needed
    { category: "", count: 0, total: 0, success: 0, pending: 0, failed: 0, isEmpty: true },
  ];

  // Logout Function
  const handleLogout = () => {
    localStorage.removeItem("adminName");
    localStorage.removeItem("adminPhoto");
    router.push("/login");
  };

  // Protected Route Logic
  useEffect(() => {
    if (!isProtected()) {
      router.push("/login");
      return;
    }

    const storedName = localStorage.getItem("adminName");
    const storedPhoto = localStorage.getItem("adminPhoto");

    if (storedName) setAdminName(storedName);
    if (storedPhoto) setAdminPhoto(storedPhoto);
  }, [router]);

  // Handle Search Action
  const handleSearch = () => {
    console.log(`Searching from ${fromDate} to ${toDate}`);
    // Add API fetch logic here
  };

  return (
    <div className="dashboard-container colorful-bg">
      <div className="main-row">
        
        {/* Sidebar Placeholder */}
        <div className="sidebar-space" />

        {/* Main Content Area */}
        <main className="main-content">
          
          {/* Header Animation */}
          <motion.div
            className="page-header"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="page-title">Business Summary</h2>
            <p className="page-subtitle">View your complete business summary .</p>
          </motion.div>

          {/* Card Animation */}
          <motion.div
            className="summary-card"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            
            {/* Filter Section */}
            <div className="filter-section">
              <input
                type="date"
                className="date-input"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />
              <input
                type="date"
                className="date-input"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
              />
              <button className="search-btn" onClick={handleSearch}>
                Search
              </button>
            </div>

            {/* Report Section */}
            <h3 className="section-title">Business Report</h3>

            <div className="table-responsive">
              <table className="summary-table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>No Of Transaction</th>
                    <th>Total Amount</th>
                    <th>Success</th>
                    <th>Pending</th>
                    <th>Failed</th>
                  </tr>
                </thead>
                <tbody>
                  {reportData.map((row, index) => (
                    <tr key={index} className={row.isEmpty ? "empty-row" : ""}>
                      <td className="category-cell">{row.category}</td>
                      <td>{row.count}</td>
                      <td>₹ {row.total}</td>
                      <td className="success-text">₹ {row.success}</td>
                      <td className="pending-text">₹ {row.pending}</td>
                      <td className="failed-text">₹ {row.failed}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default SmartSummary;