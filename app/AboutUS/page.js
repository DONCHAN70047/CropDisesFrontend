"use client";
import React from "react";

import '../css/AboutUs.css'
import Header from "../components/Header";
import Footer from "../components/Footer";
// import ConsultAboutUS from "/ConsultAboutUS.webp";  // INVALID ADDRESS - (STORE STATIC IMAGES LOCALLY)


const AboutUs = () => {
  return (
    <>
      <Header />
      <section className="about-section">
        {/* LEFT SIDE TEXT */}
        <div className="about-content">
          <h1>About Us</h1>
          <p className="intro">We are Smart Pay</p>
          <p className="sub-intro">The World Of Fintech</p>

          <p className="description">
            Our vision is to assist in accrediting every underserved segment of
            the Indian population to live a hassle-free life. As{" "}
            <strong>ISHMART TECHNOGLOBAL SERVICES PRIVATE LIMITED</strong>{" "}
            understands the consumer needs and provides services as per their
            lifestyle, we are building an unparalleled platform that brings
            finance services at the consumers’ doorstep or in their hands,
            regardless of their location.
          </p>

          <h2>Our Goal</h2>
          <p className="goal">
            We believe and we achieve with our customers’ success.
          </p>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="about-image">
          <img src='/ConsultAboutUS.webp' alt="About Us Team" /> 
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;
