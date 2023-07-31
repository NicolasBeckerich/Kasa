// J'importe React et hook useState pour la gestion de l'état local du composant
import React, { useState } from "react";

// Je définis le composant collapse qui prend title et content comme props
function Collapse({ title, content }) {
  // Je définis la variable d'état isOpen et la fonction de mise à jour setIsOpen j'initie setIsOpen à false 
  const [isOpen, setIsOpen] = useState(false);

  // je définis la fonction handleToggle qui inverse la valeur de isOpen lorsqu'elle est appelée
  function handleToggle() {
    setIsOpen(!isOpen);
  }

  // Rendu du collapse
  return (
    <div className="collapse">
      {/*  Je creer un élément et lorsqu'il est cliqué il appelle la fonction handleToggle. */}
      <div className="collapse-header" onClick={handleToggle}>
        {/* ça affiche le titre du collapse */}
        <h3>{title}</h3>
        {/*  j'affiche une fèche si le contenu est ouvert ou fermé si isOpen est ouvert j'utilise classe open sinon j'utilise la classe closed */}
        <span className={`arrow ${isOpen ? "open" : "closed"}`}></span>
      </div>
      {/*  si isOpen est vrai alors j'affiche le contenu du collapse */}
      {isOpen && (
        <div className="collapse-content">
          {/* si content est un tableau alors je creer une liste non ordonnée de ses éléments */}
          {Array.isArray(content) ? (
            <ul>
              {content.map((item, index) => (
                // Pour chaque élément du tableau content, créer des li.
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            // si content n'est pas un tableau alors j'affiche juste le contenu
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  );
}

// j'exporte le composant collapse pour une réutilisation ailleurs
export default Collapse;