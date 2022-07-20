import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import ItemCount from "../../components/ItemCount";
import ItemList from "../../components/ItemList";
import ModalConEsc from "../../components/ModalConEsc";
import ButtonCount from "../../components/ButtonCount";
import "./styles.css";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [modalVisible, setModalVisible] = useState(true);

  const params = useParams();

  useEffect(() => {
    const getProducts = async () => {
      try {
        //obtenemos el snapchost de todos los doc que generamos en firestore
        const q = query(collection(db, "products"));
        const querySnapshot = await getDocs(q);
        const productos = [];
        querySnapshot.forEach((doc) => {
          //doc.data is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          productos.push({ id: doc.id, ...doc.data() });
        });
        console.log(productos);

        // const response = await fetch("https://fakestoreapi.com/products");
        // const data = await response.json();
        setProducts(productos);
        setProductosFiltrados(productos);
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
