"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "../../css/MoneyTransfer.css";
import { motion } from "framer-motion";
import { isProtected } from "../../utils/protectedRoute";

const ChangePasswordSlidebar = () => {

  const router = useRouter();
  const [adminName, setAdminName] = useState("");
  const [adminPhoto, setAdminPhoto] = useState("");

  const [mobile, setMobile] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");

  const [otpVerified, setOtpVerified] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("adminName");
    localStorage.removeItem("adminPhoto");
    router.push("/login");
  };

  useEffect(() => {
    if (!isProtected()) {
      router.push("/login");
    } else {
      const storedName = localStorage.getItem("adminName");
      const storedPhoto = localStorage.getItem("adminPhoto");

      if (storedName) setAdminName(storedName);
      if (storedPhoto) setAdminPhoto(storedPhoto);
    }
  }, []);

  const handleVerify = () => {
    if (!otp) return alert("Enter OTP first");

    setLoading(true);

    setTimeout(() => {
      setOtpVerified(true);
      setLoading(false);
    }, 1200);
  };

  const handleResend = () => {
    alert("OTP Resent Successfully ✅");
  };

  const handleSubmit = () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Password Changed Successfully ✅");
  };

  const isFormValid =
    otpVerified &&
    mobile &&
    currentPassword &&
    email &&
    newPassword &&
    confirmPassword;

  const AnimatedInput = ({
    label,
    type,
    value,
    onChange,
    placeholder,
    disabled = false
  }) => (
    <motion.div
      className="input-wrapper"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <label className="mt-label">{label}</label>
      <motion.input
        whileFocus={{ scale: 1.02, borderColor: "#6a11cb" }}
        className="mt-input styled-input"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </motion.div>
  );

  return (
    <div className="dashboard-container colorful-bg">
      <div className="main-row">

        <div className="sidebar-space" />

        <main className="main-content">

          <motion.h2
            className="mt-main-title gradient-title"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Change Password
          </motion.h2>

          <p className="mt-subtitle">
            Update your current password to enhance security.
          </p>

          <motion.div
            className="money-transfer-container"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mt-cards-wrapper single-card-center">

              <motion.div
                className="mt-card otp-card gradient-card"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="mt-title">Secure Password Update</h3>

                <AnimatedInput
                  label="Mobile Number"
                  type="text"
                  placeholder="Enter mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />

                <AnimatedInput
                  label="Current Password"
                  type="password"
                  placeholder="Enter current password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />

                <AnimatedInput
                  label="Email"
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <AnimatedInput
                  label="Create New Password"
                  type="password"
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />

                <AnimatedInput
                  label="Confirm New Password"
                  type="password"
                  placeholder="Re-enter new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />

                {confirmPassword && confirmPassword !== newPassword && (
                  <p className="error-text">
                    Passwords do not match
                  </p>
                )}

                <AnimatedInput
                  label="OTP"
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  disabled={otpVerified}
                />

                <div className="mt-btn-row">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="mt-btn verify-btn gradient-green"
                    onClick={handleVerify}
                    disabled={otpVerified || loading}
                  >
                    {loading ? "Verifying..." : otpVerified ? "Verified ✅" : "Verify OTP"}
                  </motion.button>

                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="mt-btn resend-btn gradient-orange"
                    onClick={handleResend}
                    disabled={otpVerified}
                  >
                    Resend OTP
                  </motion.button>
                </div>

                <motion.button
                  whileHover={{ scale: isFormValid ? 1.03 : 1 }}
                  whileTap={{ scale: 0.96 }}
                  disabled={!isFormValid}
                  onClick={handleSubmit}
                  className="mt-btn submit-btn gradient-purple"
                  style={{
                    marginTop: "15px",
                    width: "100%",
                    opacity: isFormValid ? 1 : 0.6,
                    cursor: isFormValid ? "pointer" : "not-allowed"
                  }}
                >
                  Submit
                </motion.button>

              </motion.div>

            </div>
          </motion.div>

        </main>
      </div>
    </div>
  );
};

export default ChangePasswordSlidebar;
