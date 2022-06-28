//Se encarga de hacer el mapeo de los productos
import React, { useEffect, useState } from "react";
import Item from "../Item";
import { productList } from "../data/data";
//import ItemCount from "../ItemCount";

const ItemList = () => {
  const [products, setProducts] = useState([]);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productList);
    }, 2000);
  });

  const getProductsFromDB = async () => {
    try {
      const result = await getProducts;
      setProducts(result);
    } catch (error) {
      console.log(error);
      console.log("Error para mostrar los productos");
    }
  };

  useEffect(() => {
    getProductsFromDB();
  }, []);

  return (
    <div>
      {products.length ? (
        <>
          {products.map((product) => {
            const { name, img, price, stock, id } = product;

            return (
              <div key={id}>
                <Item name={name} price={price} stock={stock} id={id} />
              </div>
            );
          })}
        </>
      ) : (
        <p>Cargando productos...</p>
      )}
    </div>
  );
};

export default ItemList;
