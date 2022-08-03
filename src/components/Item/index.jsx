import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export const Item = ({ title, id, image, price }) => {
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="card ItemContainer" onClick={handleDetail}>
      <div className="card-body cardBody">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">${price}</p>
      </div>
    </div>
  );
};

export default Item;
