"use client";

import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import '../css/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-overlay">
        <div className="footer-container">

          {/* ---------- LEGAL ---------- */}
          <div className="footer-column">
            <h3>Legal</h3>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Refunds</a></li>
              <li><a href="#">Charges</a></li>
            </ul>

            <div className="social-icons">
              <a href="/UnderConstruction"><FaXTwitter /></a>
              <a href="/UnderConstruction"><FaFacebookF /></a>
              <a href="/UnderConstruction"><FaInstagram /></a>
              <a href="/UnderConstruction"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* ---------- CONTACT US ---------- */}
          <div className="footer-column">
            <h3>Contact Us</h3>
            <p><FaMapMarkerAlt /> <strong>DELHI 11005</strong></p>
            <p>
              XXXXXXXXXXXXXXXXXXX,<br />
              XXXXXXXXXXXXXXXXXXXXXXXXXXXX
            </p>
            <p><FaPhoneAlt /> <strong>12x7 Help Desk</strong></p>
            <p>+91 7303999829</p>
            <p><FaEnvelope /> <strong>Mail Us</strong></p>
            <p>careismartinfo@gmail.com</p>
          </div>

          {/* ---------- SERVICES ---------- */}
          <div className="footer-column">
            <h3>Services</h3>
            <ul>
              <li><a href="/UnderConstruction">Flight Bookings</a></li>
              <li><a href="/UnderConstruction">Bus Booking</a></li>
              <li><a href="/UnderConstruction">Hotel Booking</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2025 <span>Esmart Bazaar</span>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
