// J'importe React et les composants nécessaires
import React from "react";
import Banner from "../components/Banner";
import AboutBanner from "../images/banner-about.png";
import Collapse from "../components/Collapse";

// Je définis le composant about
function About() {

  // cela va me rendre ma bannière avec mon image avec composant Banner. Mon composant collapse viendra à chque fois avec le titre et le contenu texte afin d'avoir des collapse valide.
  return (
    <>
      <Banner bannerImg={AboutBanner} page="about" />
      <section className="about-collapses">
        <Collapse
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        />
        <Collapse
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de note plateforme."
        />
        <Collapse
          title="Service"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de note plateforme."
        />
        <Collapse
          title="Sécurité"
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </section>
    </>
  );
}

//j'exporte aboutpour l'utiliser ailleurs
export default About;