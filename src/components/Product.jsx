import React, { useState } from "react";

export default function Product({
  openModal,
  setCartItems,
  imgSrc,
  name,
  description,
  category,
  price,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    const itemToAdd = {
      id: Date.now(),
      image: imgSrc,
      name,
      description,
      category,
      price,
      quantity: 1,
    };
    setCartItems((prevItems) => {
      console.log(prevItems);
      return [...prevItems, itemToAdd];
    });

    openModal();
  };

  return (
    <div className="col-md-4">
      <div
        className="card mb-4"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div style={{ position: "relative" }}>
          <img src={imgSrc} className="card-img-top" alt={name} />
          {isHovered && (
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
