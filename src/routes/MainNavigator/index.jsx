import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../../components/NavBar";
import ItemListContainer from "../../containers/ItemListContainer";
import NotFound from "../../components/NotFound";
import ItemDetailContainer from "../../containers/ItemListContainer/ItemDetailContainer";
import Cart from "../../containers/ItemListContainer/Cart";

const MainNavigator = () => {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<ItemListContainer />}></Route>
        <Route
          path="/category/:categoryId"
          element={<ItemListContainer />}
        ></Route>
        <Route
          path="/detail/:productId"
          element={<ItemDetailContainer />}
        ></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainNavigator;
