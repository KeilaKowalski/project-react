import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList";
import "./styles.css";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);

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
        setProducts(productos);
        setProductosFiltrados(productos);
      } catch (error) {
        console.log(`An error ocurred: ` + error);
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

  return (
    <div className="ItemListContainer">
      {products.length !== 0 ? (
        <ItemList products={productosFiltrados} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ItemListContainer;
