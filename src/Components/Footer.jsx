import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "../css/Footer.css"; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_section">
          <h3>About Us</h3>
          <p>
            We provide professional driving courses to ensure safe driving skills. 
            Learn from the best instructors and get ready to hit the road with confidence.
          </p>
        </div>
        <div className="footer_section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Enroll</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer_section">
          <h3>Contact Us</h3>
          <p><FaMapMarkerAlt className="footer_icon" /> Institute of Driving Training & Research, Near New Bus Stand, Baldi Bye Pass, Baldi Karnal,132001, Haryana, India</p>
          <p><FaPhone className="footer_icon" /> +91 9034999301</p>
          <p><FaEnvelope className="footer_icon" /> helpdesk@idtrkarnal.com</p>
        </div>
        <div className="footer_section">
          <h3>Follow Us</h3>
          <div className="social_icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="footer_bottom">
        <p>&copy; 2025 Copyright (c) 2022, Institute of Driving and Training Research (Karnal). All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
