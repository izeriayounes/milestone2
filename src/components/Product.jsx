import React, { useState } from "react";
import { post } from "../api/apiService";
import { useAuthStateContext } from "../context/AuthContext";

export default function Product({
  id,
  src,
  openModal,
  name,
  description,
  category,
  price,
  featuredProduct,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const { customerId } = useAuthStateContext();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = async () => {
    try {
      await post(`cartItems?productId=${id}&customerId=${customerId}`);
      openModal();
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  return (
    <div className="col-md-3">
      <div
        className="card mb-4 bg-white rounded shadow"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div style={{ position: "relative" }}>
          <img src={src} className="card-img-top" alt={name} />
          {!featuredProduct && isHovered && (
            <button
              className="btn btn-primary"
              onClick={handleClick}
              style={{
                position: "absolute",
                bottom: "0",
                left: "0",
                width: "100%",
                borderRadius: "0",
              }}
            >
              Quick Buy +
            </button>
          )}
        </div>

        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">{category}</p>
          <p className="item-price">${price}</p>
        </div>
      </div>
    </div>
  );
}
