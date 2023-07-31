import React, { useState } from 'react';

// Je définis le composant Collapse qui prend title et content comme props
function Collapse({ title, content }) {
  // Je définis la variable d'état isOpen et la fonction de mise à jour setIsOpen j'initie setIsOpen à false
  const [isOpen, setIsOpen] = useState(false);

  // Je définis la fonction handleToggle qui inverse la valeur de isOpen lorsqu'elle est appelée
  function handleToggle() {
    setIsOpen(!isOpen);
  }

  // Rendu du collapse
  return (
    <div className="collapse">
      {/* Je créé un élément qui lorsqu'il est cliqué il appelle la fonction handleToggle */}
      <div className="collapse-header" onClick={handleToggle}>
        {/* Ça affiche le titre du collapse */}
        <h3>{title}</h3>
        {/* J'affiche une flèche si le contenu est ouvert ou fermé Si isOpen est vrai j'utilise la classe open sinon j'utilise la classe closed */}
        <span className={`arrow ${isOpen ? 'open' : 'closed'}`}></span>
      </div>
      {/* Si isOpen est vrai alors j'affiche le contenu du collapse */}
      <div className={`collapse-content ${isOpen ? 'open' : 'closed'}`}>
        {/* Si content est un tableau alors je créé une liste non ordonnée de ses éléments */}
        {Array.isArray(content) ? (
          <ul>
            {content.map((item, index) => (
              // Pour chaque élément du tableau content je créé un li
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          // Si content n'est pas un tableau alors j'affiche juste le contenu
          <p>{content}</p>
        )}
      </div>
    </div>
  );
}

// J'exporte le composant collapse pour une réutilisation ailleurs
export default Collapse;