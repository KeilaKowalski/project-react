import React from "react";
import "./styles.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="containerGreeting">
      <h1>{greeting}</h1>
      <img src="/assets/download.jpg" alt="buzo" />
    </div>
  );
};

export default ItemListContainer;
