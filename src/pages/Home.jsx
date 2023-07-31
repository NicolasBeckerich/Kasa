// J'importe Reacts, librairies et les composants nécessaires
import React, { useEffect, useState } from "react";
import axios from "axios";
import Banner from "../components/Banner";
import HomeBanner from "../images/banner-home.png";
import Card from "../components/Card";
import Loading from "../components/Loading";

// je définis le composant Home
function Home() {
  // logements contient les logements récupérés et setLogements les met à jours
  const [logements, setLogements] = useState([]);

  // isDataLoading dis si les données sont en cours de chargement et setDataLoading les met à jour 
  const [isDataLoading, setDataLoading] = useState(true);

  // useEffect va effectuer le code quand le rendu du composant est fini, j'effectue un fetch pour récupérer les données
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Attente d'une seconde avant de récupérer les données (opti simulation de chargement)
        await new Promise((resolve) => setTimeout(resolve, 1000));

        //Je récupère les données dans mon data.json
        const response = await axios.get(
          process.env.PUBLIC_URL + "/data.json"
        );

        // je met à jour logements avec les données récupérées et isDataLoading devient false
        setLogements(response.data);
        setDataLoading(false);
      } catch (error) {
        console.error("Erreur lors de la récupération des données", error);
      }
    };

    // Je lance la récupération des données
    fetchData();
  }, []);

  // j'affiche le rendu de banière et logements si ce n'est pas chargé c'est le composant Loading qui s'affiche grace à mes composants
  return (
    <>
      <Banner
        bannerImg={HomeBanner}
        bannerTitle="Chez vous, partout et ailleurs"
        page="home"
      />
      <section className="logements">
        {isDataLoading ? (
          <Loading />
        ) : (
          logements.map((logement) => (
            <Card key={logement.id} logement={logement} />
          ))
        )}
      </section>
    </>
  );
}

// j'exporte Home pour l'utiliser ailleurs
export default Home;