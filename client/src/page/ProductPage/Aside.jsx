import React from 'react'
import { Link } from "react-router-dom";


function Aside({type}) {

    const shoesSize = [35, 36, 37, 38, 39, 40, 41, 42, 43, 43, 44, 45, 46, 47];
    const clothesSize = ["XS", "S", "M", "L", "XL", "XXL"];
    
  const sortHightToLow = async () => {
    setProduct([]);
    const response = await getProductsSorter(-1);
    setProduct(response);
  };

  const sortLowToHight = async () => {
    setProduct([]);
    const response = await getProductsSorter(1);
    setProduct(response);
  };

 

  return (
    <aside className="w-2/12">
          <article className="pl-4">
            <h3 className="font-bold">Filter By Category</h3>
            <div className="flex flex-col  justify-start">
            <Link
                to="/products/all"
                >
                All Products
                </Link> 

                <Link
                to="/products/shoes"
                >
                Shoes
                </Link> 
              
                <Link
                to="/products/clothes"
                >
                Clothes
                </Link> 
             
            </div>
          </article>

          <article className="pl-4 pt-7">
            <h3 className="font-bold">Filter By Size</h3>

            <div className="flex flex-row flex-wrap gap-4 text-center pt-3 pb-6">
              {shoesSize.map((size, i) => {
                return (
                  <button
                    key={i}
                    className="border-gray-300 border-2 p-2 hover:border-black focus:bg-black focus:text-white"
                  >
                    {size}{" "}
                  </button>
                );
              })}
            </div>
          </article>
        </aside>
  )
}

export default Aside