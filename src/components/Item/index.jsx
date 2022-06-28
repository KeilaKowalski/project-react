import React from "react";
import ItemCount from "../ItemCount";

export const Item = ({ name, img, price, id, stock }) => {
  const onAdd = (qty) => {
    console.log(`Has agregado ${qty} libros`);
  };

  return (
    <article>
      <img />

      <h3>{name}</h3>
      <span>{price}</span>

      <ItemCount stock={stock} onAdd={onAdd} initial={1} />
    </article>
  );
};

export default Item;
