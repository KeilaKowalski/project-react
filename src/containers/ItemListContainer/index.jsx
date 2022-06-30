import React from "react";
import { useState, useEffect } from "react";
//import ItemCount from "../../components/ItemCount";
import ItemList from "../../components/ItemList";
import "./styles.css";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        const data = await response.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.log(error);
        console.log("Ocurrió un error");
      }
    };
    getProducts();
  }, []);
  console.log(products);
  return (
    <div>
      <p>{greeting}</p>
      {products.length !== 0 ? (
        <ItemList products={products} />
      ) : (
        <p>Loading...</p>
      )}
      {/* <img src="/assets/download.jpg" alt="buzo" />
      <h2>Productos</h2>
      <ItemList /> */}
    </div>
  );
};

export default ItemListContainer;
