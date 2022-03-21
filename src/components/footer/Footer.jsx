import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
export const Footer = () => {
  return (
    <section id="footer">
      <header>
        Made with <i className="fas fa-heart text-secondary"></i> by
        <span className="text-secondary">Vinit Kanse</span>
      </header>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/vinit-kanse-96838b184/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://www.github.com/vinc3nati" target="_blank">
          <FaGithub />
        </a>
      </div>
      <div className="copyright text-light">
        &copy; 2022 - 2023
        <span className="text-primary text-bold">Shinobi Store</span>
      </div>
    </section>
  );
};
