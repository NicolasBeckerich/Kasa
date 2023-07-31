// j'importe les bibliothèques, composants, routeur et styles nécessaires
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./sass/main.scss";

// J'utilise la méthode createRoot de ReactDOM pour créer une racine à partir de l'élément avec l'id root dans le HTML
const root = ReactDOM.createRoot(document.getElementById("root"));

// j'utilise la méthode render de la racine pour rendre l'application à l'intérieur de l'élément avec l'id root, le router permet de mettre en oeuvre mon routage
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <main>
        <AppRouter />
      </main>
      <Footer />
    </Router>
  </React.StrictMode>
);