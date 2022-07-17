import React from "react";
import { useContext } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { Shop } from "../../context/ShopContext";

const CartWidget = () => {
  const { cart } = useContext(Shop);

  return (
    <div>
      <HiShoppingCart size={38} className="iconoCarrito" />
      {cart.length > 0 ? <span>{cart.length}</span> : <span></span>}
    </div>
  );
};

export default CartWidget;
