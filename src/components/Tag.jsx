//j'importe React
import React from "react";

// Je creer un tag pour afficher un libellé mis dans une div avec un style 
export default function Tag({ tagName }) {
  return (
    <div className="tag">
      <span className="tag-name">{tagName}</span>
    </div>
  );
}