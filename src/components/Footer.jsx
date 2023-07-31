// J'importe React 
import React from "react";

// J'importe l'image dont j'ai besoin 
import Logo from "../images/logo-footer.png";

// Je définis le composant Footer
function Footer() {
  // J'ai le rendu du footer 
  return (
    <footer>
      <img src={Logo} alt="Logo Kasa" />
      <span>© 2020 Kasa. All rights reserved</span>
    </footer>
  );
}

// J'exporte le composant pour pouvoir le réutiliser
export default Footer;