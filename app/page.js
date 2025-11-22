"use client";

import { useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "./page.css";

export default function Home() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const scrollContainer = carouselRef.current;
    const scrollSpeed = 1;

    const autoScroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;

        if (
          scrollContainer.scrollLeft >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }
      requestAnimationFrame(autoScroll);
    };

    requestAnimationFrame(autoScroll);
  }, []);

  return (
    <div className="app">
      {/* HEADER */}
      <Header />

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-text">
          <h1>Fintech for the Fast-Changing</h1>
          <h2>भारत</h2>
          <p>
            Surprisingly, less than 5% of the population of Bharat is insured.
            Sell insurance across various sectors and earn commissions.
          </p>

          <a href="/UnderConstruction" className="download-btn">
            Explore Our Web Service
          </a>
        </div>

        <div className="hero-img">
          <span className="currency">₹</span>
          <span className="currency">₹</span>
          <span className="currency">₹</span>

          <img
            src="https://cdn.pixabay.com/photo/2021/02/16/15/35/smartphone-6020615_960_720.png"
            alt="Phone"
          />
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services">
        <h2 className="services-title">BANKING & DIGITAL SERVICES</h2>
        <p className="services-desc">
          All services are fully secure. You can assist customers with digital banking.
        </p>

        <div className="services-grid">
          <div className="service-card">
            <img src="https://cdn-icons-png.flaticon.com/512/10004/10004969.png" alt="Money Transfer" />
            <h3>Money Transfer</h3>
          </div>

          <div className="service-card">
            <img src="https://cdn-icons-png.flaticon.com/512/10434/10434351.png" alt="UPI" />
            <h3>UPI</h3>
          </div>

          <div className="service-card">
            <img src="https://cdn-icons-png.flaticon.com/512/10004/10004976.png" alt="Pay Credit" />
            <h3>Pay Credit</h3>
          </div>

          <div className="service-card">
            <img src="https://cdn-icons-png.flaticon.com/512/1865/1865273.png" alt="Bus Booking" />
            <h3>Bus Booking</h3>
          </div>

          <div className="service-card">
            <img src="https://cdn-icons-png.flaticon.com/512/2356/2356780.png" alt="Hotel Booking" />
            <h3>Hotel Booking</h3>
          </div>

          <div className="service-card">
            <img src="https://cdn-icons-png.flaticon.com/512/1523/1523288.png" alt="Flight Booking" />
            <h3>Flight Booking</h3>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="partners">
        <h2 className="partners-title">Our Strategic Partners</h2>
        <div className="underline"></div>

        <div className="partners-carousel">
          <div className="partners-logos" ref={carouselRef}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Airtel_Payments_Bank_Logo.svg" alt="Airtel" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Razorpay_logo.svg" alt="Razorpay" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/63/RBL_Bank_logo.svg" alt="RBL Bank" />
            <img src="https://www.cellmoney.in/assets/img/logo.png" alt="Cellmoney" />
            <img src="https://iserveu.in/assets/img/logo.png" alt="iServeU" />
            <img src="https://etrav.in/assets/img/logo.png" alt="Etrav.in" />
            <img src="https://www.gibl.in/images/logo.png" alt="GIBL.in" />
            <img src="https://www.paysprint.in/assets/img/logo.svg" alt="PaySprint" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Paytm_logo.png" alt="Paytm" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/26/PhonePe_Logo.svg" alt="PhonePe" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Google_Pay_Logo.svg" alt="Google Pay" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
