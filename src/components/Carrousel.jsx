// j'importe les hooks et bibliothèques nécessaires depuis React
import React, { useState, useRef } from "react";

// je définis le composant carrousel qui va prendre images en entrée
function Carrousel({ images }) {

  // je définis un état local pour suivre l'index de l'image actuellement affichée
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // J'utilise une ref pour acceder dans le Dom à l'image et sa taille
  const carrouselImageRef = useRef(null);

  // Ici ma fonction pour obtenir la taille de l'image
  const imageSize = () => {
    const carrouselImage = carrouselImageRef.current;

    // si pas de ref ça renvoie 0 
    if (!carrouselImage) {
      return 0;
    }

    // sinon ça renvoie la taille de mon image
    return carrouselImage.width;
  };

  // je creer ma fonction pour passer à l'image précédente 
  function previousImage() {
    setCurrentImageIndex((currentIndex) =>
      currentIndex === 0 ? images.length - 1 : currentIndex - 1
    );
  }

  // je creer ma fonction pour passer à l'image suivante
  function nextImage() {
    setCurrentImageIndex((currentIndex) =>
      currentIndex === images.length - 1 ? 0 : currentIndex + 1
    );
  }

  // Si il y'a juste une image ça me donne l'image sans les bouton précédent et suivant 
  if (images.length === 1) {
    return (
      <div className="carrousel">
        <img className="carrousel-image" src={images[0]} alt="Logement" />
      </div>
    );
  }

  // rendu de mon carroussel avec les bouton de navigation 
  return (
    <div className="carrousel">
      <div
        className="carrousel-container"
        style={{
          transform: `translateX(-${currentImageIndex * imageSize()}px)`,
        }}>
        {images.map((image, index) => (
          // j'affiche chaque image du carrousel, au dessus on utilise méthode map qui parcourt chaque images du tableau d'images pour ensuite xcreer un éléements images pour chacunes d'elles
          <img
            className="carrousel-image"
            src={image}
            key={index}
            alt="Logement"
            ref={carrouselImageRef}
          />
        ))}
      </div>
       {/* le bouton de navigation pour le carroussel vers précédent */}
      <div className="carrousel-navigation">
        <button className="carrousel-button" onClick={previousImage}>
          &lt;
        </button>
       {/* j'affiche l'index actuel de l'image et du total des images */}
        <span className="carrousel-counter">{`${currentImageIndex + 1} / ${
          images.length
        }`}</span>

        {/* le bouton de navigation pour le carroussel vers suivant */}
        <button className="carrousel-button" onClick={nextImage}>
          &gt;
        </button>
      </div>
    </div>
  );
}

// j'exporte Carrousel pour l'utiliser ailleurs
export default Carrousel;