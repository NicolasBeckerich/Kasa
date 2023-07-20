import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Logement from "../pages/Logement";
import PageNotFound from "../pages/PageNotFound";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/about" element={<About />} />
      <Route path="/logement/:logementId" element={<Logement />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRouter;