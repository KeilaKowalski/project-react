//Se encarga de hacer el mapeo de los productos
import React, { useEffect, useState } from "react";
import Item from "../Item";
import { productList } from "../data/data";
//import ItemCount from "../ItemCount";
import "./styles.css";

const ItemList = ({ products }) => {
  // const [products, setProducts] = useState([]);

  // const getProducts = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(productList);
  //   }, 2000);
  // });

  // const getProductsFromDB = async () => {
  //   try {
  //     const result = await getProducts;
  //     setProducts(result);
  //   } catch (error) {
  //     console.log(error);
  //     console.log("Error para mostrar los productos");
  //   }
  // };

  // useEffect(() => {
  //   getProductsFromDB();
  // }, []);

  return (
    // <div className="ItemListDiv">
    //   {products.map((producto) => {
    //     return <Item product={producto} key={producto.id} />;
    //   })}
    //</div>
    <div className="ItemListDiv">
      {products.length ? (
        <>
          {products.map((product) => {
            const { title, img, price, stock, id, description } = product;

            return (
              <div className="ItemListDiv2" key={id}>
                <Item
                  product={product}
                  title={title}
                  price={price}
                  stock={stock}
                  id={id}
                />
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
