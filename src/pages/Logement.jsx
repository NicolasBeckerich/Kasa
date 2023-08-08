// j'importe les hooks et bibliothèques nécessaires depuis React
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Collapse from "../components/Collapse";
import Carrousel from "../components/Carrousel";
import Tag from "../components/Tag";
import Rating from "../components/Rating";
import Loading from "../components/Loading";

// je définis le composent logement (pour afficher les détails d'un logement)
function Logement() {
  //je récupère l'id du logement depuis l'URL (avec useparams de react router dom)
  const { logementId } = useParams();

  // je définis l'état pour stocker les détails du logement et l'état de chargement des données
  const [logement, setLogement] = useState(null);
  const [isDataLoading, setDataLoading] = useState(true);

  // j'initialise la fonction navigate pour la redirection
  const navigate = useNavigate();

  // cela charge les détails du logement à partir de data.json en premier montage du composant
  useEffect(() => {
    const fetchLogement = async () => {
      try {
         // je simule un délai de chargement
        await new Promise((resolve) => setTimeout(resolve, 1000));
        
        // je récupère des données depuis le fichier data.json
        const response = await axios.get(
          process.env.PUBLIC_URL + "/data.json"
        );

        // recherche du logement correspondant à l'ID
        const logementData = response.data.find(
          (logement) => logement.id === logementId
        );

        if (logementData) {
          // si le logement est trouvé mise à jour de l'état
          setLogement(logementData);
        } else {
          // si le logement n'est pas trouvé redirection vers la page 404 d'erreur
          navigate("/404");
        }
        // mise à jour de l'état de chargement
        setDataLoading(false);
      } catch (error) {
        // Affichage d'une erreur en cas d'échec de la requête
        console.error("Erreur lors de la récupération des données", error);
      }
    };

    //j'appelle  la fonction pour récupérer les données
    fetchLogement();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // j'affiche mon composant loading tant que les données sont en cours de chargement ou si le logement est null
  if (isDataLoading || !logement) {
    return <Loading />;
  }

  // Rendu de mon composant logement
  return (
    <section className="logement">
      <Carrousel images={logement.pictures} />
      <div className="logement-title">
        <div>
          <h2>{logement.title}</h2>
          <p>{logement.location}</p>
        </div>
        <div className="host">
          <p>{logement.host.name}</p>
          <img src={logement.host.picture} alt={logement.host.name}></img>
        </div>
      </div>
      <div className="tags-and-rating">
        <div className="tags-container">
          {/* j'affiche des tags du logement */}
          {logement.tags.map((tag) => (
            <Tag key={tag} tagName={tag} />
          ))}
        </div>
        <Rating rating={logement.rating} />
      </div>
      <div className="logement-collapses">
        {/* j'affiche les collapses pour la description et les équipements */}
        <Collapse title="Description" content={logement.description} />
        <Collapse title="Équipements" content={logement.equipments} />
      </div>
    </section>
  );
}

// j'exporte Logement pour l'utiliser ailleurs
export default Logement;
