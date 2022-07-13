import React from "react";
import { useContext } from "react";
import { IoIosTrash } from "react-icons/io";
import { Shop } from "../../context/ShopContext";

const ItemTrash = ({ removeItem }) => {
  const { cart } = useContext(Shop);

  return (
    <div>
      <IoIosTrash onClick={() => removeItem(item.id)} />
    </div>
  );
};

export default ItemTrash;
