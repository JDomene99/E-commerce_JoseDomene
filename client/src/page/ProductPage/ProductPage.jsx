import React, { useEffect, useState } from "react";
import { getProducts } from "../../api/products";
import ProductCard from "../../components/Product/ProductCard";

function ProductPage() {
  const [products, setProduct] = useState([]);

  async function fetchData() {
    const response = await getProducts();
    setProduct(response);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-row flex-wrap text-center justify-center gap-10">
      {products.map((product) => {
        return <ProductCard key={product._id} product={product} />;
      })}
    </div>
  );
}

export default ProductPage;
