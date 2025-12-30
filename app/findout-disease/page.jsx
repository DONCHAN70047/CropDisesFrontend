"use client";

import { useState, useRef } from "react";

export default function FindOutDisease() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);
  const cameraInputRef = useRef(null);

  const handleImage = (file) => {
    if (!file) return;

  
    if (file.size < 200 * 1024) {
      alert("❌ Image quality too low. Please upload a clearer image.");
      return;
    }

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  return (
    <main className="page">
      {/* HERO */}
      <section className="hero">
        <h1>Find Out Rice Leaf Disease</h1>
        <p>
          Upload or capture a <b>clear, high-quality rice leaf image</b> for
          accurate AI prediction
        </p>
      </section>

      {/* CARD */}
      <section className="card">
        {/* IMAGE PREVIEW */}
        <div className="previewBox">
          {preview ? (
            <img src={preview} alt="Preview" />
          ) : (
            <div className="placeholder">
              <span>📷</span>
              <p>No image selected</p>
            </div>
          )}
        </div>

        {/* ACTION BUTTONS */}
        <div className="actions">
          <button onClick={() => fileInputRef.current.click()}>
            Upload from Device
          </button>
          <button className="outline" onClick={() => cameraInputRef.current.click()}>
            Use Camera
          </button>
        </div>

        {/* FILE INPUTS */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          hidden
          onChange={(e) => handleImage(e.target.files[0])}
        />
        <input
          type="file"
          accept="image/*"
          capture="environment"
          ref={cameraInputRef}
          hidden
          onChange={(e) => handleImage(e.target.files[0])}
        />

        {/* IMAGE TIPS */}
        <div className="tips">
          <h4>📌 Image Guidelines</h4>
          <ul>
            <li>✔ Capture image in good daylight</li>
            <li>✔ Focus only on the rice leaf</li>
            <li>✔ Avoid blurry or distant shots</li>
            <li>✔ Keep leaf centered & flat</li>
          </ul>
        </div>

        {/* PREDICT BUTTON */}
        <button
          className="predictBtn"
          disabled={!image}
          onClick={() => alert("Connect ML API here")}
        >
          Predict Disease
        </button>
      </section>

      {/* STYLES */}
      <style jsx>{`
        .page {
          min-height: 100vh;
          background: #ffffff; /* White background */
          padding: 100px 16px 40px;
          color: #111827; /* Dark text for readability */
          font-family: "Inter", sans-serif;
        }

        /* HERO */
        .hero {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 40px;
        }

        .hero h1 {
          font-size: 2.6rem;
          color: #22c55e;
          margin-bottom: 12px;
        }

        .hero p {
          font-size: 1.05rem;
          color: #374151;
        }

        /* CARD */
        .card {
          max-width: 520px;
          margin: auto;
          background: #f9fafb; /* Light gray card */
          border-radius: 18px;
          padding: 24px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }

        /* PREVIEW */
        .previewBox {
          width: 100%;
          height: 280px;
          border-radius: 14px;
          overflow: hidden;
          background: #e5e7eb; /* Light gray preview box */
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .previewBox img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .placeholder {
          text-align: center;
          color: #9ca3af;
        }

        .placeholder span {
          font-size: 3rem;
        }

        /* ACTIONS */
        .actions {
          display: flex;
          gap: 14px;
          margin-bottom: 20px;
        }

        .actions button {
          flex: 1;
          padding: 12px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          font-weight: 600;
          background: #22c55e;
          color: #ffffff;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .actions button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 15px rgba(34, 197, 94, 0.4);
        }

        .actions .outline {
          background: transparent;
          border: 2px solid #22c55e;
          color: #22c55e;
        }

        .actions .outline:hover {
          background: #22c55e;
          color: #ffffff;
        }

        /* TIPS */
        .tips {
          background: #f3f4f6;
          padding: 14px;
          border-radius: 12px;
          margin-bottom: 20px;
          color: #374151;
        }

        .tips h4 {
          margin-bottom: 8px;
          color: #16a34a;
        }

        .tips ul {
          padding-left: 18px;
          font-size: 0.9rem;
        }

        /* PREDICT */
        .predictBtn {
          width: 100%;
          padding: 14px;
          font-size: 1rem;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          font-weight: 700;
          background: linear-gradient(135deg, #22c55e, #16a34a);
          color: #ffffff;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .predictBtn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(34, 197, 94, 0.45);
        }

        .predictBtn:disabled {
          background: #9ca3af;
          cursor: not-allowed;
        }

        /* MOBILE */
        @media (max-width: 480px) {
          .hero h1 {
            font-size: 2rem;
          }

          .previewBox {
            height: 200px;
          }
        }
      `}</style>
    </main>
  );
}
