import React from "react";
import Card from "./Card";

function ProductList({ products, prod }) {
  console.log(products);
  return (
    <div className="products-list">
      {products.map((product) => (
            <Card product={product}/>
      ))}
    </div>
  );
}

export default ProductList;
