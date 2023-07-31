// J'importe React et Navlink de ract router dom
import React from "react";
import { NavLink } from "react-router-dom";

// je définis le composant Pagenotfound
function PageNotFound() {

// Cela me rend un message avec le retourner sur la page d'accueil qui permet de retourner sur la page d'accueil au clique
  return (
    <div className="page-404">
      <span>404</span>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to="/">Retourner sur la page d'accueil</NavLink>
    </div>
  );
}

// j'exporte PageNotFound pour l'utiliser ailleurs
export default PageNotFound;