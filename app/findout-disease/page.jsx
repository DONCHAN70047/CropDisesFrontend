"use client";

import { useState, useRef } from "react";

export default function FindOutDisease() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const uploadRef = useRef(null);
  const cameraRef = useRef(null);

  /* IMAGE QUALITY CHECK */
  const validateImageQuality = (file) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = URL.createObjectURL(file);

      img.onload = () => {
        if (img.width < 800 || img.height < 800) {
          reject("❌ Image resolution too low. Use a clearer image.");
        } else {
          resolve();
        }
      };
    });
  };

  /* HANDLE IMAGE */
  const processFile = async (file) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("❌ Only image files are allowed");
      return;
    }

    if (file.size > 200 * 1024) {
      alert("❌ Image quality too low (min 400KB)");
      return;
    }

    try {
      await validateImageQuality(file);

      if (preview) URL.revokeObjectURL(preview);

      setImage(file);
      setPreview(URL.createObjectURL(file));
      setResult(null);
    } catch (err) {
      alert(err);
    }
  };

  /* DRAG & DROP */
  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    processFile(e.dataTransfer.files[0]);
  };

  /* ML API */
  const predictDisease = async () => {
    if (!image) return;

    setLoading(true);
    setResult(null);

    try {
      const formData = new FormData();
      formData.append("image", image);

      const res = await fetch("http://127.0.0.1:8000/api/detect/", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error();

      const data = await res.json();
      setResult(data);
    } catch {
      alert("❌ ML server not responding");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="page">
      {/* HERO */}
      <section className="hero">
        <h1>Find Rice Leaf Disease</h1>
        <p>Upload or capture a <b>high-resolution leaf image</b></p>
      </section>

      {/* CARD */}
      <section className="card">
        {/* DROP AREA */}
        <div
          className={`dropZone ${dragActive ? "active" : ""}`}
          onDragOver={(e) => {
            e.preventDefault();
            setDragActive(true);
          }}
          onDragLeave={() => setDragActive(false)}
          onDrop={handleDrop}
        >
          {preview ? (
            <img src={preview} alt="Preview" />
          ) : (
            <>
              <span>📷</span>
              <p>Drag & Drop Image Here</p>
              <small>or use buttons below</small>
            </>
          )}
        </div>

        {/* ACTIONS */}
        <div className="actions">
          <button onClick={() => uploadRef.current.click()}>
            Upload Image
          </button>
          <button
            className="outline"
            onClick={() => cameraRef.current.click()}
          >
            Use Camera
          </button>
        </div>

        {/* FILE INPUTS */}
        <input
          ref={uploadRef}
          type="file"
          accept="image/*"
          hidden
          onChange={(e) => processFile(e.target.files[0])}
        />

        <input
          ref={cameraRef}
          type="file"
          accept="image/*"
          capture="environment"
          hidden
          onChange={(e) => processFile(e.target.files[0])}
        />

        {/* GUIDELINES */}
        <div className="tips">
          <h4>📌 Best Results</h4>
          <ul>
            <li>✔ Rear camera recommended</li>
            <li>✔ Bright natural light</li>
            <li>✔ Leaf fully visible</li>
            <li>✔ Avoid blur & shadows</li>
          </ul>
        </div>

        {/* PREDICT */}
        <button
          className="predictBtn"
          disabled={!image || loading}
          onClick={predictDisease}
        >
          {loading ? "Analyzing..." : "Predict Disease"}
        </button>

        {/* RESULT */}
        {result && (
          <div className="resultBox">
            <h3>🧪 Result</h3>
            <p><b>Disease:</b> {result.disease}</p>
            <p><b>Confidence:</b> {(result.confidence * 100).toFixed(2)}%</p>
          </div>
        )}
      </section>

      {/* STYLES */}
      <style jsx>{`
        .page {
          min-height: 100vh;
          padding: 100px 16px;
          background: #fff;
          font-family: Inter, sans-serif;
        }

        .hero {
          text-align: center;
          margin-bottom: 40px;
        }

        .hero h1 {
          color: #22c55e;
          font-size: 2.4rem;
        }

        .card {
          max-width: 520px;
          margin: auto;
          background: #f9fafb;
          border-radius: 18px;
          padding: 24px;
          box-shadow: 0 12px 32px rgba(0,0,0,.08);
        }

        .dropZone {
          height: 280px;
          border: 2px dashed #22c55e;
          border-radius: 14px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          background: #ecfdf5;
          text-align: center;
        }

        .dropZone.active {
          background: #d1fae5;
        }

        .dropZone img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

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
          background: #22c55e;
          color: white;
          font-weight: 600;
        }

        .actions .outline {
          background: transparent;
          border: 2px solid #22c55e;
          color: #22c55e;
        }

        .tips {
          background: #f3f4f6;
          padding: 14px;
          border-radius: 12px;
          margin-bottom: 20px;
        }

        .predictBtn {
          width: 100%;
          padding: 14px;
          border-radius: 12px;
          background: linear-gradient(135deg,#22c55e,#16a34a);
          color: #fff;
          font-weight: 700;
          border: none;
        }

        .predictBtn:disabled {
          background: #9ca3af;
        }

        .resultBox {
          margin-top: 20px;
          padding: 16px;
          background: #ecfdf5;
          border-radius: 12px;
          color: #065f46;
        }
      `}</style>
    </main>
  );
}
