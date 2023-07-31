// j'importe react
import React from "react";
import { Link } from "react-router-dom";

// Je définis le composant card qui donne les infos sur le logements
function Card({ logement }) {
  // j'extrais les détails nécessaires du logement
  const { id, cover, title } = logement;

  // Rendu d'une carte de logement avec une image un titre et un lien vers sa page de détails
  return (
    <article key={id}>
      <Link to={`/logement/${id}`}>
        <figure className="card">
          <img src={cover} alt={title} />
          <figcaption>
            <h2>{title}</h2>
          </figcaption>
        </figure>
      </Link>
    </article>
  );
}

// J'exporte le composant pour une utilisation dans d'autres parties de l'application
export default Card;