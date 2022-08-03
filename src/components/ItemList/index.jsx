import React from "react";
import Item from "../Item";
import "./styles.css";

const ItemList = ({ products }) => {
  return (
    <div className="ItemListDiv">
      {products.length ? (
        <>
          {products.map((product) => {
            const { title, price, stock, id } = product;

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
