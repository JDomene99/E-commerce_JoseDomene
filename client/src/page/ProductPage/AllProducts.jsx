import React, { useEffect, useState } from "react";
import { getProductFilter,getProductsBySize } from "../../api/products";
import ProductCard from "../../components/Product/ProductCard";
import { useOutletContext } from "react-router-dom";
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSize } from "../../state/products";

function AllProducts({}) {
  const [products, setProduct] = useState([]);
  const { data, size } = useOutletContext();
  const dispatch = useDispatch();
//   const size = useSelector((state) => state.product);
  

  async function fetchData() {
    console.log('ada')
    setProduct([]);
    let response;
    console.log(size)
    size !==null ? response = await getProductsBySize(size) :  response = await getProductFilter(data)
    dispatch(setSize(null));
    
    setProduct(response);
  }

  useEffect(() => {
    fetchData();
  }, [data || size]);
  
  return (
    <section className="w-10/12 flex flex-row flex-wrap text-center justify-center gap-10 py-5  mx-auto">
         <h1 className="text-gray-500 w-full text-start">{products.length} resultados</h1>
      {products.map((product) => {
        return <ProductCard key={product._id} product={product} />;
      })}
    </section>
  );
}

export default AllProducts;