import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import ButtonCount from "../ButtonCount";
import { useContext } from "react";
import { Shop } from "../../context/ShopContext";
import Swal from "sweetalert2";

const ItemDetail = ({ product }) => {
  const [qtyAdded, setQtyAdded] = useState(0);
  const { addItem } = useContext(Shop);

  const handleConfirm = (qty) => {
    setQtyAdded(qty);
  };
  const handleTerminate = () => {
    addItem(product, qtyAdded);
    Swal.fire("Done", "Your product was added to cart.", "success");
  };

  return (
    <div className="card itemDetailDiv">
      <img
        className="card-img-top rounded-1"
        src={product.image}
        alt="productDetail"
      ></img>
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">${product.price}</p>
        <p className="card-text">{product.description}</p>
        {!qtyAdded ? (
          <ButtonCount onConfirm={handleConfirm} maxQuantity={product.stock} />
        ) : (
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleTerminate}
          >
            Add to cart
          </button>
        )}
        <div className="continueShopping">
          <Link to="/">Continue shopping</Link>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
