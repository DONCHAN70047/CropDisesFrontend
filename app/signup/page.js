"use client"
import React from "react";
// import { useNavigate } from "react-router-dom";
import { useRouter } from "next/navigation";
import "../css/SignUP.css";

const SignUP = () => {
  const router = useRouter();

  const handleAdminClick = () => {
    router.push("/AdminSignUpFormPageLogin");
  };

  return (
    <div className="onboard-container">
      {/* Left Section */}
      <div className="onboard-left">
        <div className="illustration">
          <img
            src="https://cdn-icons-png.flaticon.com/512/9774/9774265.png"
            alt="mobile payment"
            className="phone-image"
          />
        </div>
        <div className="contact-info">
          <p>
            <strong>Call @</strong> XXX XXXX XXX
          </p>
          <p>
            <strong>Email :</strong> info@nbnk.com
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="onboard-right">
        <div className="branding">
          <h1 className="brand-title">NBNK FINTECH</h1>
          <h3 className="brand-subtitle">THE FUTURE OF FINTECH</h3>
        </div>

        <div className="message">
          <p>Welcome to the NBNK FINTECH family!</p>
          <p>We will open the onboarding process shortly.</p>
          <p>Only admin can access the SignUp process. Please contact us.</p>
          <p>
            You can call us regarding your queries <br />
            <strong>+91 XXX XXXX XXX</strong>
          </p>
        </div>

        <div className="heart">❤️</div>
        <h2 className="thank-you">Thank you!</h2>

        <button className="signup-btn" onClick={handleAdminClick}>
          Add Admin
        </button>
      </div>
    </div>
  );
}
