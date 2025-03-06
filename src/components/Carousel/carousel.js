import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import cross from '../../assets/slider/cross.webp';
import kettel from '../../assets/slider/kettel.webp';
import deadlift from '../../assets/slider/deadlift.webp';
import './carousel.css';

const OptimizedImage = ({ src, alt, className }) => {
  return (
    <img 
      src={src} 
      alt={alt}
      className={className}
      loading="lazy"
      fetchpriority="high"
      decoding="async"
    />
  );
};

const ImageCarousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const imageDescriptions = [
    "Exercice de deadlift",
    "Exercice de crossfit",
    "Exercice avec kettlebell"
  ];

  // Préchargement des images
  useEffect(() => {
    const preloadImages = async () => {
      const promises = images.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
        });
      });
      await Promise.all(promises);
    };

    preloadImages();
  }, [images]);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval, isHovered]);

  const goToSlide = (index) => setCurrentIndex(index);
  const nextSlide = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);

  return (
    <div 
      className="carousel-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="region"
      aria-label="Carrousel d'images d'exercices"
    >
      <div className="carousel-wrapper">
        <OptimizedImage 
          src={images[currentIndex]} 
          alt={imageDescriptions[currentIndex]}
          className="carousel-image"
        />
        
        <button 
          onClick={prevSlide} 
          className="carousel-button prev"
          aria-label="Image précédente"
        >
          <ChevronLeft className="carousel-icon" />
        </button>
        
        <button 
          onClick={nextSlide} 
          className="carousel-button next"
          aria-label="Image suivante"
        >
          <ChevronRight className="carousel-icon" />
        </button>
      </div>
      
      <div className="carousel-dots">
        {images.map((_, index) => (
          <button 
            key={index} 
            onClick={() => goToSlide(index)}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            aria-label={`Aller à l'image ${index + 1}: ${imageDescriptions[index]}`}
            aria-current={index === currentIndex ? "true" : "false"}
          />
        ))}
      </div>
    </div>
  );
};

const Carousel = () => {
  const images = [deadlift, cross, kettel];
  
  return <ImageCarousel images={images} interval={5000} />;
};

export default Carousel;