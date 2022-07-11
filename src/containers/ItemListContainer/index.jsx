import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import ItemCount from "../../components/ItemCount";
import ItemList from "../../components/ItemList";
import ModalConEsc from "../../components/ModalConEsc";
import ButtonCount from "../../components/ButtonCount";
import "./styles.css";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [modalVisible, setModalVisible] = useState(true);

  const params = useParams();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setProductosFiltrados(data);
      } catch (error) {
        console.log(error);
        console.log("Ocurrió un error");
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    if (params?.categoryId) {
      const productosFiltrados = products.filter(
        (producto) => producto.category === params.categoryId
      );
      setProductosFiltrados(productosFiltrados);
    } else {
      setProductosFiltrados(products);
    }
  }, [params, products]);

  console.log(products);

  // const handleConfirm = (quantity) => {
  //   console.log(`Se agrego la cantidad: ${quantity}`);
  // }

  return (
    <div className="ItemListContainer">
      {/* <p>{greeting}</p> */}
      {products.length !== 0 ? (
        <ItemList products={productosFiltrados} />
      ) : (
        <p>Loading...</p>
      )}
      {/* <img src="/assets/download.jpg" alt="buzo" />
      <h2>Productos</h2>
      <ItemList /> */}
    </div>
  );
};

export default ItemListContainer;
