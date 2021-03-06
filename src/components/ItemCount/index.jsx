import React from "react";
import { useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [qty, setQty] = useState(initial);

  initial = 0;
  stock = 10;
  const addProduct = (num) => {
    setQty(qty + num);
  };

  return (
    <div>
      <div>
        <button
          className=""
          onClick={() => addProduct(-1)}
          disabled={qty === initial ? true : null}
        >
          -
        </button>
        <span className="">{qty}</span>
        <button
          className=""
          onClick={() => addProduct(+1)}
          disabled={qty === stock ? true : null}
        >
          +
        </button>
      </div>

      <button
        className=""
        onClick={() => onAdd(qty)}
        disabled={stock === 0 ? true : null}
      >
        Añadir
      </button>
    </div>
  );
};

export default ItemCount;
