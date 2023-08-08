// j'importe React et les images d'étoiles
import React from "react";
import inactiveStar from "../images/star-inactive.png"; 
import activeStar from "../images/star-active.png";    

// Je créer le composant Rating qui affiche une note sous forme d'étoiles
export default function Rating({ rating }) {
  // je creer une liste des notes en étoiles
  const stars = [1, 2, 3, 4, 5];

  return (
    <div>
      {/* je parcours chaque numéro de ma liste stars */}
      {stars.map((starNumber) =>
        // si la note est supérieure ou égale au numéro de l'étoile actuelle ça affiche une étoile active
        rating >= starNumber ? (
          <img
            key={starNumber.toString()} 
            className="star"            
            src={activeStar}            
            alt="Rate star"            
          />
        ) : (
          // sinon ça affiche une étoile inactive
          <img
            key={starNumber.toString()}
            className="star"            
            src={inactiveStar}          
            alt="Rate star"             
          />
        )
      )}
    </div>
  );
}