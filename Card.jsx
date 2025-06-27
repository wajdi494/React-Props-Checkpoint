import React from "react";

function Card({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt="" height={150} />
      <h6>{product.title}</h6>
      <h5>{product.price} $</h5>
      <button>see more</button>
    </div>
  );
}

export default Card;
