import React, { useEffect } from 'react';
import { FaUserAlt, FaRunning } from 'react-icons/fa'; // Import des icônes
import './CoachingPerso.css';

const ServiceCard = ({ title, description, features, icon }) => (
  <div className="service-card fade-in">
    <div className="service-icon-container">{icon}</div>
    <h3 className="service-card-title">{title}</h3>
    <p className="service-card-description">{description}</p>
    <ul className="features">
      {features.map((feature, index) => (
        <li key={index} className="feature-active">
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

const Services = () => {
  const services = [
    {
      title: 'Coaching personnalisé 💥',
      description: 'Des programmes adaptés à vos besoins spécifiques pour atteindre vos objectifs personnels.',
      features: ['Perte de poids', 'Prise de masse', 'Sport santé / Remise en forme', 'Suivi en salle ou en ligne'],
      icon: <FaUserAlt />,
    },
    {
      title: 'HYROX 🔝',
      description: 'Un entraînement structuré pour renforcer votre endurance, développer votre puissance et affiner votre mental.',
      features: [
        'Maîtriser les épreuves HYROX',
        'Adapté à tous les niveaux, débutants ou confirmés',
        'Boostez vos performances physiques',
        'Gagner en confiance et en énergie'
      ],
      icon: <FaRunning />,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className="services-section">
      <h2>Choisis le programme parfait pour tes ambitions 🏋️‍♀️</h2>
      <p className="services-subtitle">
        <strong>Évolue, progresse et dépasse-toi !</strong>
      </p>
      <div className="services-container">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;