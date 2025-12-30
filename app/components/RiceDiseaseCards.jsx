"use client";

import Link from "next/link";
import { riceDiseases } from "../data/riceDiseases";

export default function RiceDiseaseCards() {
  return (
    <section className="section">
      <h2 className="sectionTitle">Rice Leaf Diseases</h2>

      <div className="grid">
        {riceDiseases.map((disease) => (
          <div className="card" key={disease.id}>
            <img src={disease.image} alt={disease.name} />

            <div className="cardContent">
              <div>
                <h3>{disease.name}</h3>
                <p>{disease.description}</p>
              </div>

              <Link href={disease.page} className="learnMore">
                Learn More →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .section {
          padding: 80px 20px;
          background: #0b0b0b;
          color: #fff;
        }

        .sectionTitle {
          text-align: center;
          font-size: 2.2rem;
          margin-bottom: 50px;
          color: #22c55e;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 28px;
          max-width: 1200px;
          margin: auto;
        }

        .card {
          background: rgba(255, 255, 255, 0.04);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 35px rgba(0, 0, 0, 0.6);
          transition: transform 0.3s ease;
        }

        .card:hover {
          transform: translateY(-6px);
        }

        .card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }

        .cardContent {
          padding: 18px;
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: space-between;
        }

        h3 {
          margin-bottom: 10px;
          font-size: 1.25rem;
        }

        p {
          font-size: 0.9rem;
          line-height: 1.5;
          color: #cbd5f5;
        }

        .learnMore {
          margin-top: 16px;
          text-align: right;
          color: #22c55e;
          font-weight: 600;
          text-decoration: none;
        }

        .learnMore:hover {
          text-decoration: underline;
        }
      `}</style>
    </section>
  );
}
