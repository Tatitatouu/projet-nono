import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-icons">
        <a href="https://www.instagram.com/noemiehsn/" 
           target="_blank" 
           rel="noopener noreferrer"
           aria-label="Suivez-moi sur Instagram">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://www.facebook.com/noemie.husson.9" 
           target="_blank" 
           rel="noopener noreferrer"
           aria-label="Suivez-moi sur Facebook">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="mailto:noemiehusson1@gmail.com"
           aria-label="Contactez-moi par email">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
      </div>
      <p className="footer-credit">
        © 2025 - Créé avec 💜 par
      <a 
        href="https://tatitatouu.github.io/Projet12--Portfolio/" 
        target="_blank" 
        rel="noopener noreferrer"
        >Tatiana</a>
      </p>
    </footer>
  );
};

export default Footer;