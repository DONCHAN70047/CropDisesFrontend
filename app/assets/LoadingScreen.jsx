import React from "react";
import "./LoadingScreen.css";

export default function LoadingScreen() {
  return (
    <div className="loading-overlay">
      <div className="rupee-spinner">
        ₹
      </div>
      <p className="loading-text">Loading...</p>
    </div>
  );
}
