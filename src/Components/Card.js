import React from "react";

const Card = ({ animal }) => {
  return (
    <li className="card">
      <img src={animal.image} alt={"image " + animal.nom} />
      <div className="infos">
        <h2>{animal.nom}</h2>
        <h3>{animal.nomScientifique}</h3>
        <h4> {animal.régime} </h4>
        <p> pays : {animal.pays} </p>
      </div>
    </li>
  );
};

export default Card;
