"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import "./AddBankAccountSlidebar.css";

const AddBankAccount = () => {
  const [formData, setFormData] = useState({
    bank: "",
    accountNo: "",
    ifsc: "",
    holderName: "",
    chequePhoto: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, chequePhoto: e.target.files[0] }));
  };

  const handleSubmit = () => {
    console.log("Submitting Bank Settlement:", formData);
    alert("Bank Settlement Submitted (Console Log)");
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
            <h2 className="page-title">AEPS Bank Settlement</h2>
            <p className="page-subtitle">Add your AEPS Bank settlement account and transfer your AEPS amount instantly.</p>
          </motion.div>

          {/* --- Form Container --- */}
          <motion.div 
            className="settlement-form-card"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
             <h3 className="form-heading">Account Details</h3>
             
             <div className="form-content">
                
                {/* Bank Select */}
                <div className="form-group">
                    <label>Bank</label>
                    <select 
                        name="bank" 
                        value={formData.bank} 
                        onChange={handleChange}
                        className="form-select"
                    >
                        <option value="">-Select-</option>
                        <option value="SBI">State Bank of India</option>
                        <option value="HDFC">HDFC Bank</option>
                        <option value="ICICI">ICICI Bank</option>
                        <option value="AXIS">Axis Bank</option>
                    </select>
                </div>

                {/* Account Number */}
                <div className="form-group">
                    <label>Account No</label>
                    <input 
                        type="text" 
                        name="accountNo"
                        value={formData.accountNo}
                        onChange={handleChange}
                        className="form-input"
                    />
                </div>

                {/* IFSC Code */}
                <div className="form-group">
                    <label>IFSC</label>
                    <input 
                        type="text" 
                        name="ifsc"
                        value={formData.ifsc}
                        onChange={handleChange}
                        className="form-input"
                    />
                </div>

                {/* Account Holder Name */}
                <div className="form-group">
                    <label>Account Holder Name</label>
                    <input 
                        type="text" 
                        name="holderName"
                        value={formData.holderName}
                        onChange={handleChange}
                        className="form-input"
                    />
                </div>

                {/* Upload Cheque */}
                <div className="form-group">
                    <label>Upload Cancel Cheque Photo</label>
                    <div className="file-input-wrapper">
                         <input 
                            type="file" 
                            onChange={handleFileChange}
                            className="custom-file-input"
                         />
                    </div>
                </div>

                {/* Submit Button */}
                <button className="btn-submit-blue" onClick={handleSubmit}>
                    Submit
                </button>

             </div>
          </motion.div>

        </main>
      </div>
    </div>
  );
};

export default AddBankAccount;