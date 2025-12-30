"use client";
import RiceDiseaseCards from "./components/RiceDiseaseCards";

export default function Home() {
  return (
    <>
      <main className="container">
        {/* Overlay */}
        <div className="overlay"></div>

        {/* Content */}
        <div className="content">
          <h1 className="title">Rice Disease Detection</h1>
          <p className="subtitle">
            Detect rice leaf diseases early using AI-powered analysis
          </p>

          <div className="buttonGroup">
            <button className="primaryBtn">Upload Leaf Image</button>
            <button className="secondaryBtn">Learn More</button>
          </div>
        </div>

        {/* CSS */}
        <style jsx>{`
        .container {
          min-height: 100vh;
          min-width: 100%;
          background-image: url("/BackgroundImage2.jpg");
          background-size: cover;
          background-position: center;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.55);
        }

        .content {
          position: relative;
          text-align: center;
          color: #fff;
          padding: 20px;
          max-width: 800px;
          z-index: 1;
        }

        .title {
          font-size: 3.5rem;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .subtitle {
          font-size: 1.3rem;
          margin-bottom: 35px;
          line-height: 1.6;
        }

        .buttonGroup {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .primaryBtn {
          padding: 14px 28px;
          font-size: 1rem;
          border-radius: 8px;
          border: none;
          background-color: #22c55e;
          color: #000;
          cursor: pointer;
          font-weight: 600;
        }

        .secondaryBtn {
          padding: 14px 28px;
          font-size: 1rem;
          border-radius: 8px;
          border: 2px solid #fff;
          background-color: transparent;
          color: #fff;
          cursor: pointer;
          font-weight: 600;
        }

        /* 📱 Mobile Responsive */
        @media (max-width: 768px) {
          .title {
            font-size: 2.2rem;
          }

          .subtitle {
            font-size: 1.05rem;
            margin-bottom: 25px;
          }

          .buttonGroup {
            flex-direction: column;
            gap: 15px;
          }

          .primaryBtn,
          .secondaryBtn {
            width: 100%;
            max-width: 260px;
            margin: 0 auto;
          }
        }
      `}</style>
      </main>
      {/* INFO SECTION */}
      <RiceDiseaseCards />
    </>
  );
}
