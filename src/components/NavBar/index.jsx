import React from "react";
import CartWidget from "../CartWidget";
import "./styles.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/category/electronics">Electronics</Link>
      </li>
      <li>
        <Link to="/category/jewelery">Jewelery</Link>
      </li>
      <li>
        <Link to="/category/women's clothing">Women's clothing</Link>
      </li>
      <li>
        <Link to="/category/men's clothing">Men's clothing</Link>
      </li>
      <div className="containerCarrito">
        <Link to="/cart" style={{ textDecoration: "none" }}>
          {<CartWidget />}
        </Link>
      </div>
    </ul>
  );
};

export default NavBar;
