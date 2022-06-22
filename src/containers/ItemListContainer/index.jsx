import React from "react";
import ItemCount from "../../components/ItemCount";
import "./styles.css";

const ItemListContainer = ({ greeting }) => {
  const onAdd = () => {
    console.log("Se agrego al carrito");
  };

  return (
    <div className="containerGreeting">
      <h1>{greeting}</h1>
      <img src="/assets/download.jpg" alt="buzo" />
      <ItemCount onAdd={onAdd} />
    </div>
  );
};

export default ItemListContainer;
