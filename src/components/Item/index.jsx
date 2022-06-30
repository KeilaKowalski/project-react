import React from "react";
import ItemCount from "../ItemCount";
import { useNavigate } from "react-router-dom";

export const Item = ({ name, img, price, id, stock }) => {
  const onAdd = (qty) => {
    console.log(`Has agregado ${qty} libros`);
  };

  const navigate = useNavigate();

  const handleDetail = () => {
    console.log("navega hacia el detail");
    navigate(`/detail/${id}`);
  };

  return (
    <article>
      onClick={handleDetail}
      <img />
      <h3>{name}</h3>
      <span>{price}</span>
      <ItemCount stock={stock} onAdd={onAdd} initial={1} />
    </article>
  );
};

export default Item;
