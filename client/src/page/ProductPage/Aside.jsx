import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSize } from "../../state/products";

function Aside({ type }) {
  const shoesSize = {
    name: "Shoes",
    array: [34,35, 36, 37, 38, 39, 40, 41, 42, 43, 43, 44, 45, 46, 47,48,49,50],
  };
  const clothesSize = {
    name: "Clothes",
    array: ["XS", "S", "M", "L", "XL", "XXL"],
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleButton = (size) =>{
    console.log(size)
    dispatch(setSize(size));
    // navigate('/products/shoes');
  }

  function ArticleSize({ type }) {
    return (
      <article className="pl-4 pt-7">
        <h3 className="font-bold">Filter By {type.name} Size</h3>

        <div className="flex flex-row flex-wrap gap-4 text-center pt-3 pb-6">
          {type.array.map((size, i) => {
            return (
              <button
                key={i}
                className="border-gray-300 border-2 p-2 hover:border-black focus:bg-black focus:text-white"
                onClick={ () => handleButton(size)}
              >
                {size}{" "}
              </button>
            );
          })}
        </div>
      </article>
    );
  }

  return (
    <aside className="w-2/12">
      <article className="pl-4">
        <h3 className="font-bold">Filter By Category</h3>
        <div className="flex flex-col  justify-start">
          <Link to="/products/all">All Products</Link>

          <Link to="/products/shoes">Shoes</Link>

          <Link to="/products/clothes">Clothes</Link>
        </div>
      </article>

      {type == "all" ? (
        <div>
          <ArticleSize type={clothesSize} />
          <ArticleSize type={shoesSize} />
        </div>
      ) : type === "shoes" ? (
        <ArticleSize type={shoesSize} />
      ) : (
        <ArticleSize type={clothesSize} />
      )}

      {}
    </aside>
  );
}

export default Aside;
