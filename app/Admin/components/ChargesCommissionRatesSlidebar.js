"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ChargesCommissionRatesSlidebar.css";

const ChargesCommissionRates = () => {
  const [selectedService, setSelectedService] = useState("");
  const [data, setData] = useState([]); // Empty for "No Records" state

  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
    console.log("Service Selected:", e.target.value);
    // You would typically fetch data here based on service
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
            <h2 className="page-title">Charges/Commission Rates</h2>
            <p className="page-subtitle">
              View Your Transaction Charges and Commissiomn Rates.
            </p>
          </motion.div>

          {/* --- Filter & Data Section --- */}
          <motion.div
            className="charges-card"
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="card-heading">View Charges</h4>

            {/* Service Dropdown */}
            <div className="service-select-row">
               <select 
                  className="service-dropdown"
                  value={selectedService}
                  onChange={handleServiceChange}
               >
                   <option value="">-Service-</option>
                   <option value="MoneyTransfer">Money Transfer</option>
                   <option value="AEPS">AEPS</option>
                   <option value="Recharge">Recharge</option>
                   <option value="BillPayment">Bill Payment</option>
               </select>
            </div>

            {/* Table Area */}
            <div className="charges-table-container">
                <table className="charges-table">
                    <thead>
                        <tr>
                            <th>S#</th>
                            <th>From Amount</th>
                            <th>To Amount</th>
                            <th>Charges</th>
                            <th>Commission</th>
                            <th>Adon Charges</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length === 0 ? (
                           <tr className="empty-row">
                               <td colSpan="6"></td> 
                               {/* Empty row just to show headers clearly like screenshot */}
                           </tr>
                        ) : (
                            data.map((row, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{row.fromAmount}</td>
                                    <td>{row.toAmount}</td>
                                    <td>{row.charges}</td>
                                    <td>{row.commission}</td>
                                    <td>{row.adonCharges}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default ChargesCommissionRates;