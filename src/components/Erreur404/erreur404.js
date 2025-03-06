import React from "react";
import { Dumbbell } from "lucide-react";
import './erreur404.css';
const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="title-container">
        <h1 className="not-found-title">OUPS !</h1>
      </div>

      <div className="message-container">
        <p className="not-found-message">
          Cette page n'existe pas (encore), mais pas de stress, on va vous remettre sur la bonne trajectoire ! 💪
        </p>

        <div className="action-container">
          <a href="/projet-nono" className="back-home-link">
            Retour à l'accueil
          </a>
      
        </div>
      </div>

      <div className="icon-footer">
        <Dumbbell size={24} className="footer-icon" />
        <Dumbbell size={32} className="footer-icon footer-icon-delay" />
        <Dumbbell size={24} className="footer-icon footer-icon-delay-2" />
      </div>
    </div>
  );
};

export default NotFound;