import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaDiscord, FaEnvelope } from "react-icons/fa";
import "./Contact.css";
const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Us</h2>
      <p>Connect with us through our social platforms</p>

      <div className="social-links">
        <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>

        <a href="https://linkedin.com/in/yourpage" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>

        <a href="https://github.com/yourpage" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>

        <a href="https://discord.gg/yourlink" target="_blank" rel="noopener noreferrer">
          <FaDiscord />
        </a>

        <a href="mailto:yourmail@gmail.com">
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
};

export default Contact;