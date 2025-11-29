"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "../../css/MoneyTransfer.css";
import { motion } from "framer-motion";
import { isProtected } from "../../utils/protectedRoute";


const MoneyTransfer = () => {
  const router = useRouter();

  // Admin Data
  const [adminName, setAdminName] = useState("");
  const [adminPhoto, setAdminPhoto] = useState("");

  // Inputs
  const [senderMobile, setSenderMobile] = useState("");
  const [beneficiaryAccount, setBeneficiaryAccount] = useState("");

  // Result Box
  const [searchResult, setSearchResult] = useState(null);

  // Logout Function
  const handleLogout = () => {
    localStorage.removeItem("adminName");
    localStorage.removeItem("adminPhoto");
    router.push("/login");
  };

  // Protected Route
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

  
  const handleSearchSender = async () => {
    if (!senderMobile) {
      alert("Please enter sender mobile number");
      return;
    }

    try {
      const res = await fetch("/searchAccount", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: senderMobile }),
      });

      const data = await res.json();
      setSearchResult(data);
      console.log(data)

    } catch (error) {
      console.log("Search error:", error);
    }
  };

  // 🏦 Search Beneficiary Account No
  const handleSearchBeneficiary = async () => {
    if (!beneficiaryAccount) {
      alert("Please enter account number");
      return;
    }

    try {
      const res = await fetch("/RoyelPayoutDatabaseSearchAccount", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ account_number: beneficiaryAccount }),
      });

      const data = await res.json();
      setSearchResult(data);

    } catch (error) {
      console.log("Search error:", error);
    }
  };

  return (
    <div className="dashboard-container colorful-bg">
      <div className="main-row">

        <div className="sidebar-space" />

        <main className="main-content">

          <motion.h2
            className="mt-main-title"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Royel Payout
          </motion.h2>

          <motion.div
            className="money-transfer-container"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mt-cards-wrapper">

              {/* Sender Search */}
              <motion.div
                className="mt-card"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="mt-title">🔍 Search Sender Mobile No</h3>
                <label className="mt-label">10 Digit Mobile No</label>

                <input
                  type="text"
                  className="mt-input"
                  placeholder="Enter mobile number"
                  value={senderMobile}
                  onChange={(e) => setSenderMobile(e.target.value)}
                />

                <button className="mt-btn" onClick={handleSearchSender}>
                  Search
                </button>
              </motion.div>

              {/* Beneficiary Search */}
              <motion.div
                className="mt-card"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="mt-title">🏦 Search Beneficiary Account No</h3>
                <label className="mt-label">Account Number</label>

                <input
                  type="text"
                  className="mt-input"
                  placeholder="Enter account number"
                  value={beneficiaryAccount}
                  onChange={(e) => setBeneficiaryAccount(e.target.value)}
                />

                <button className="mt-btn" onClick={handleSearchBeneficiary}>
                  Search
                </button>
              </motion.div>

            </div>

            {/* Result Box */}
            {searchResult && (
              <motion.div
                className="search-result-box"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3>Search Result</h3>
                <pre>{JSON.stringify(searchResult, null, 2)}</pre>
              </motion.div>
            )}

          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default MoneyTransfer;
