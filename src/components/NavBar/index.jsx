import React from "react";
import CartWidget from "../CartWidget";
import "./styles.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul>
      {/* <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/category/electronic">Electronics</Link>
      </li>
      <li>
        <Link to="/category/jewelery">Jewelery</Link>
      </li>
      <li>
        <Link to="/category/women's clothes">Women's Clothes</Link>
      </li>
      <div className="containerCarrito">
        {" "}
        <CartWidget />
      </div> */}
    </ul>
  );
};

export default NavBar;
