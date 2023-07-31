// J'importe React
import React from "react";

// J'importe Navlink pour pouvoir creer des lien de navigations 
import { NavLink } from "react-router-dom";

// J'importe l'image dont j'ai besoin pour le header
import Logo from "../images/logo.png";

// Je définis le composant du Header
function Header() {

// rendu de header
  return (
    <header>
      <div>
        <NavLink to="/">
          <img src={Logo} alt="Logo Kasa" />
        </NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/about">A Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

// J'exporte le composant header pour pouvoir l'utiliser ailleurs dans l'application
export default Header;