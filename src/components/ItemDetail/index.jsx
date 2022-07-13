import React from "react";
//import ItemCount from "../ItemCount";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import ButtonCount from "../ButtonCount";
import { useContext } from "react";
import { Shop } from "../../context/ShopContext";

const ItemDetail = ({ product }) => {
  const navigate = useNavigate();

  product.stock = 10;

  const [qtyAdded, setQtyAdded] = useState(0);
  const { addItem } = useContext(Shop);

  const handleConfirm = (qty) => {
    setQtyAdded(qty);
  };
  const handleTerminate = () => {
    addItem(product, qtyAdded);
    navigate("/cart");
  };

  console.log(qtyAdded);
  return (
    <div className="ItemDetailDiv">
      <h1>{product.title}</h1>
      <img src={product.image} alt="porductDetail" />
      <span>${product.price}</span>
      <p>{product.description}</p>
      {!qtyAdded ? (
        <ButtonCount onConfirm={handleConfirm} maxQuantity={product.stock} />
      ) : (
        <button onClick={handleTerminate}>Finalizar compra</button>
      )}
    </div>
  );
};

export default ItemDetail;
