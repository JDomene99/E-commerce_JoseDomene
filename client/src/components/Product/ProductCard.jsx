import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <button
      className="xs:w-5/12 lg:w-3/12 2xl:w-3/12"
      onClick={() => navigate(`/product/${product._id}`)}
    >
      <div>
        <img src={product.img} alt=""  className=""/>

        <h3 className="font-bold">{product.name}</h3>
        <h3 className="font-bold">{product.price} $</h3>
      </div>
    </button>
  );
}

export default ProductCard;
