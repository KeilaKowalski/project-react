import React from "react";
import "./styles.css";

const ItemDetail = ({ product }) => {
  console.log(product);
  return (
    <div className="ItemDetailDiv">
      <h1>{product.title}</h1>
      <img src={product.image} alt="porductDetail" />
      <span>${product.price}</span>
      <p>{product.description}</p>
    </div>
  );
};

export default ItemDetail;
