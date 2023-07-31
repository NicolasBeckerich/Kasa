// J'importe React 
import React from "react";

// Je définis un composant banner qui prend bannerImg bannerTitle et page comme props
function Banner({ bannerImg, bannerTitle, page }) {
// ça me rend un div avec une classe basée sur page une image avec bannerImg comme source et bannerTitle comme alt et un h1 avec bannerTitle comme texte
  return (
    <div className={`banner ${page}`}>
      <img src={bannerImg} alt={bannerTitle} />
      <h1>{bannerTitle}</h1>
    </div>
  );
}

// J'xporte le composant banner pour une réutilisation ailleurs
export default Banner;