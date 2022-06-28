import React from "react";
//import { useState } from "react";
//import ItemCount from "../../components/ItemCount";
import ItemList from "../../components/ItemList";
import "./styles.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <section>
      {/* <h1>{greeting}</h1>
      <img src="/assets/download.jpg" alt="buzo" /> */}
      <h2>Productos</h2>
      <ItemList />
    </section>
  );
};

export default ItemListContainer;
