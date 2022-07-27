import React from "react";
import { useContext } from "react";
import ItemTrash from "../../../components/ItemTrash";
import { Shop } from "../../../context/ShopContext";
import { Link, useNavigate } from "react-router-dom";
import ordenGenerada from "../../../utils/ordenGenerada";
import ordenGuardada from "../../../utils/ordenGuardada";
import Form from "../../../components/Form";

const Cart = () => {
  const { cart, removeItem, getTotalPrice, clearAll } = useContext(Shop);
  console.log(cart);
  const navigate = useNavigate();

  const confirmarOrden = async () => {
    const orden = ordenGenerada("Keila", "Calle 321", cart, 1240);
    navigate("/project-class/src/components/Form/index.jsx");
    ordenGuardada(cart, orden);
  };

  const navigateForm = () => {
    navigate("/project-class/src/components/Form");
  };
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
      {cart.length < 1 ? (
        <>
          <h3>Your cart it´s empty</h3>

          <Link to="/">Continue Shopping</Link>
        </>
      ) : (
        cart.map((producto) => {
          return (
            <div style={{ display: "block" }}>
              <li
                style={{ display: "flex", alignItems: "center" }}
                key={producto.id}
              >
                {producto.title} $ {producto.price} (Qty:
                {producto.quantity}) - Total: ${" "}
                {producto.price * producto.quantity}
                <span
                  onClick={() => removeItem(producto.id)}
                  style={{ fontSize: "25px", padding: "10px", margin: "5px" }}
                >
                  <ItemTrash />
                </span>
              </li>
            </div>
          );
        })
      )}

      <div>Total: $ {getTotalPrice()}</div>
      <button onClick={navigateForm}>Confirm order</button>
      {/* <button onClick={confirmarOrden}>Confirm order</button> */}
      <button onClick={() => clearAll()}>Delete All</button>
    </ul>
  );
};

export default Cart;
