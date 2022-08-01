import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import Animaux from "../Components/Animaux";

const Navigation = () => {
  const [dropdown, setDropdown] = useState(false);
  const [classChoisie, setClassChoisie] = useState("");
  return (
    <>
      <nav>
        <Link to="/" className="logo" onClick={() => setClassChoisie("")}>
          <img src="./logo-animals.png" alt="" />
        </Link>

        <ul className="nav-items">
          <li key="0" className="acceuil" onClick={() => setClassChoisie("")}>
            <Link to="./">Acceuil</Link>
          </li>
          <li
            key="1"
            className="animaux"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <Link to="./">Animaux</Link>

            {dropdown && <Dropdown set={setClassChoisie} />}
          </li>
          <li key="2" className="apropos">
            <Link to="./about">A propos</Link>
          </li>
        </ul>
      </nav>
      <Animaux classChoisie={classChoisie} />
    </>
  );
};

export default Navigation;
