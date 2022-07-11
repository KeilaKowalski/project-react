import React from "react";
import { useState } from "react";

const ButtonCount = ({ onConfirm, maxQuantity }) => {
  const [value, setValue] = useState(1);
  maxQuantity = 10;
  const handleConfirm = () => {
    if (value <= maxQuantity) {
      onConfirm(value);
    } else {
      alert("El valor es mayor a maxQuantity");
    }
  };

  return (
    <div
      style={
        {
          //   display: "flex",
          //   flexDirection: "row",
        }
      }
    >
      <button
        onClick={() => setValue((value) => value - 1)}
        disabled={value === 0 ? true : null}
      >
        -
      </button>
      <span style={{ margin: "0px 5px 0px 5px" }}>{value}</span>
      <button
        onClick={() => setValue((value) => value + 1)}
        disabled={value === maxQuantity ? true : null}
      >
        +
      </button>
      <button
        style={{ display: "block", marginTop: "10px" }}
        onClick={handleConfirm}
        disabled={value === 0 ? true : null}
      >
        Confirm
      </button>
    </div>
  );
};

export default ButtonCount;
