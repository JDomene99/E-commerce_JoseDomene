import React, { useEffect, useState } from "react";
import { getProductFilter } from "../../api/products";
import ProductCard from "../../components/Product/ProductCard";
import { useOutletContext } from "react-router-dom";
function ClothesPage({}) {
  const [products, setProduct] = useState([]);
  const { data } = useOutletContext();
 
  async function fetchData() {
    setProduct([]);
    const response = await getProductFilter(data);
    setProduct(response);
  }

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <section className="w-10/12 flex flex-row flex-wrap text-center justify-center gap-10 py-5  mx-auto">
      {products.map((product) => {
        return <ProductCard key={product._id} product={product} />;
      })}
    </section>
  );
}

export default ClothesPage;
