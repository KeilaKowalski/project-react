import React, { useContext } from "react";
import ItemCount from "../ItemCount";
import { useNavigate } from "react-router-dom";
import { Shop } from "../../context/ShopContext";
import "./styles.css";

export const Item = ({ title, id, price, count }) => {
  const cartContext = useContext(Shop);
  const { setCart } = Shop;

  const onAdd = (qty) => {
    console.log(`Has agregado ${qty} productos`);
  };

  const navigate = useNavigate();

  const handleDetail = () => {
    console.log("navega hacia el detail");
    navigate(`/detail/${id}`);
  };

  return (
    <div className="ItemContainer" onClick={handleDetail}>
      <p>{title}</p>
      <span>${price}</span>
      {/* <ItemCount stock={count} onAdd={onAdd} initial={1} /> */}
    </div>
  );
};

export default Item;
