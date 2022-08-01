import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "./Card";

const Animaux = ({ classChoisie }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/animals").then((res) => setData(res.data));
  }, []);
  return (
    <div>
      <ul className="animals">
        {data
          .filter((animal) => animal.classe.includes(classChoisie))
          .sort()
          .map((animal, index) => (
            <Card key={index} animal={animal} />
          ))}
      </ul>
    </div>
  );
};

export default Animaux;
