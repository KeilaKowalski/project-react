import React from "react";
import { useContext } from "react";
import ItemTrash from "../../../components/ItemTrash";
import { Shop } from "../../../context/ShopContext";

const Cart = () => {
  const { cart, removeItem, getTotalPrice, clearAll } = useContext(Shop);
  console.log(cart);
  return (
    <ul
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "150px",
        marginLeft: "30px",
        backgroundColor: "white",
        listStyle: "disc",
      }}
    >
      {cart.map((producto) => {
        return (
          <div style={{ display: "block" }}>
            <li
              style={{ display: "flex", alignItems: "center" }}
              key={producto.id}
            >
              {producto.title} - (Qty: {producto.quantity}) - ${producto.price}
              <span
                onClick={() => removeItem(producto.id)}
                style={{ fontSize: "25px", padding: "10px", margin: "5px" }}
              >
                <ItemTrash />
              </span>
              {/* <img src={producto.image} alt={producto.title} widt="20px" /> */}
            </li>
          </div>
        );
      })}

      <div>Total: ${getTotalPrice()}</div>
      <button onClick={() => clearAll(cart)}>Eliminar todo</button>
    </ul>
  );
};

export default Cart;