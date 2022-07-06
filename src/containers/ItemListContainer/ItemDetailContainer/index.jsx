import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "../../../components/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({});
  const params = useParams();
  // const [error, setError] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${params.productId}`
        );
        const data = await response.json();
        setProductDetail(data);
      } catch (error) {
        console.log(error);
        // setError(error.message);
      }
    };
    getProducts();
  }, [params]);

  return Object.keys(productDetail).length !== 0 ? (
    <ItemDetail product={productDetail} />
  ) : (
    <p>Loading...</p>
  );
};

export default ItemDetailContainer;
