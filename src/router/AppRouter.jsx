//j'importe les routes de react-router-dom et les composants de chaque page
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Logement from "../pages/Logement";
import PageNotFound from "../pages/PageNotFound";

// Mon AppRouter va définir les routes de l'application
function AppRouter() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      {/* pour / j'arrive sur la page Home */}
      <Route path="/" element={<Home />} exact />
      
       {/* pour /about j'arrive sur la page About. */}
      <Route path="/about" element={<About />} />
      
     {/* pour /logement/:logementId j'arrive sur la page Logement. */}
      <Route path="/logement/:logementId" element={<Logement />} />
      
      {/* pour toutes les autres route j'arrive sur PageNotFound */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    </Router>
  );
}

//  J'exporte AppRouter pour l'utiliser ailleurs
export default AppRouter;