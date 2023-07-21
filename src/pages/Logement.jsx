import React from "react";
import { useParams } from "react-router-dom";

const Logement = () => {
    const { logementId } = useParams();

    return (
        <div>
            <h1>Logement</h1>
            <p>Page de logement avec ID : {logementId}</p>
        </div>
    );
}

export default Logement;