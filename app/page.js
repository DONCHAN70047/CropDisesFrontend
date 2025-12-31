"use client";
import Link from "next/link";
import { useEffect } from "react";
import "./page.css";
import RiceDiseaseCards from "./components/RiceDiseaseCards";

export default function Home() {
  useEffect(() => {
    const callBackend = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/run-task/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ msg: "frontend triggered" }),
        });
        const data = await response.json();
        console.log("Backend response:", data);
      } catch (err) {
        console.error("API call failed:", err);
      }
    };

    callBackend();
  }, []);

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
            <Link href="/findout-disease" className="primaryBtn">
              <button className="primaryBtn">
                Upload Leaf Image & Find Disease
              </button>
            </Link>

            <button className="secondaryBtn">Learn More</button>
          </div>
        </div>
      </main>

      {/* INFO SECTION */}
      <RiceDiseaseCards />
    </>
  );
}
