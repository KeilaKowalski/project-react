import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "../../../components/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/config";

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({});
  const params = useParams();

  useEffect(() => {
    const getProducts = async () => {
      try {
        //llamo a la referencia del documento
        //bbdd, coleccion, id del prod al que quiero acceder
        const docRef = doc(db, "products", params.productId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log(docSnap.id);
          console.log("Document data:", docSnap.data());
          const productDetail = { id: docSnap.id, ...docSnap.data() };
          setProductDetail(productDetail);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [params]);

  return Object.keys(productDetail).length !== 0 ? (
    <ItemDetail product={productDetail} />
  ) : (
    <p>Loading...</p>
  );
};

export default ItemDetailContainer;
