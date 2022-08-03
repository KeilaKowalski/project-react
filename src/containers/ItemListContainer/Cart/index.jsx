import React from "react";
import { useContext } from "react";
import ItemTrash from "../../../components/ItemTrash";
import { Shop } from "../../../context/ShopContext";
import { Link } from "react-router-dom";
import ordenGenerada from "../../../utils/ordenGenerada";
import ordenGuardada from "../../../utils/ordenGuardada";
import Form from "../../../components/Form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Cart = () => {
  const { cart, removeItem, getTotalPrice, clearAll } = useContext(Shop);

  const MySwal = withReactContent(Swal);
  const confirmarOrden = async (orderBuyer) => {
    const orden = ordenGenerada(orderBuyer, cart, getTotalPrice());
    ordenGuardada(cart, orden);
    clearAll();
  };

  const emptyCart = () => {
    MySwal.fire({
      title: <p>Are you sure?</p>,
      text: "The cart will be deleted",
      icon: "warning",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        MySwal.fire("Canceled", "Your cart is empty", "success");
        clearAll();
      }
    });
  };
  return (
    <>
      <ul
        className="border p-3"
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "75px",
          marginLeft: "10px",
          backgroundColor: "white",
        }}
      >
        <h4>Products</h4>
        {cart.length < 1 ? (
          <>
            <h3>Ups! Your cart is empty :(</h3>

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
        <span>
          {cart.length > 0 && (
            <button
              type="button"
              className="btn btn-warning btn-md mt-2"
              onClick={() => emptyCart()}
            >
              Delete All
            </button>
          )}
        </span>
      </ul>

      <div>{cart.length > 0 && <Form confirmarOrden={confirmarOrden} />}</div>
    </>
  );
};

export default Cart;
