import React from "react";
import { useContext } from "react";
import ItemTrash from "../../../components/ItemTrash";
import { Shop } from "../../../context/ShopContext";

const Cart = () => {
  const { cart } = useContext(Shop);
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
          <li
            style={{ display: "flex", alignItems: "center" }}
            key={producto.id}
          >
            {producto.title} - ${producto.price}
            <a style={{ fontSize: "25px", padding: "10px", margin: "5px" }}>
              <ItemTrash />
            </a>
            {/* <img src={producto.image} alt={producto.title} widt="20px" /> */}
          </li>
        );
      })}
    </ul>
  );
};

export default Cart;
