import React, { useState } from "react";
const Dropdown = ({ set }) => {
  const [dropdown, setDropdown] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    setDropdown(false);
    set(e.target.value);
  }
  return (
    <>
      <ul
        className={dropdown ? "class-animals clicked" : "class-animals"}
        onClick={() => setDropdown(!dropdown)}
      >
        <li key="0" value="0" onClick={handleClick}>
          Mammiféres
        </li>
        <li key="1" value="1" onClick={handleClick}>
          Reptiles
        </li>
        <li key="2" value="2" onClick={handleClick}>
          Oiseaux
        </li>
        <li key="3" value="3" onClick={handleClick}>
          Amphibiens
        </li>
      </ul>
    </>
  );
};

export default Dropdown;
