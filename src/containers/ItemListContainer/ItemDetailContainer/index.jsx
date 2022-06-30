import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "../../../components/ItemDetail";

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/3");
        const data = await response.json();
        setProductDetail(data);
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
    };
    getProducts();
  }, []);

  return <ItemDetail product={productDetail} />;
};

export default ItemDetailContainer;
