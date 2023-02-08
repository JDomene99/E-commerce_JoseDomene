import React, { useState, useEffect } from "react";
import "./style.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { getProducts } from "../../api/products";
function HomePage() {
  const [products, setProduct] = useState([]);

  async function fetchData() {
    const response = await getProducts();
    setProduct(response);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 300;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 300;
  };

  return (
    <div className="2xl:px-40">
      <section className="homePage h-[800px] bg-contain bg-no-repeat mx"></section>

      <section>
        
        <h1>Best Sellers</h1>
        <div className="relative flex items-center xs:w-11/12  sm:mx-auto xs:mx-auto xs:mb-4">
          <ArrowBackIosIcon
            className="opacity-50 cursor-pointer hover:opacity-100"
            onClick={slideLeft}
            size={70}
          />

          <div
            id="slider"
            className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          >
            {products.map((button, i) => (
              <button
                key={i}
                value={button.name}
                className="w-4/12 align-middle p-2 px-4 mx-1 rounded-md cursor-pointer hover:scale-105 ease-in-out duration-300"
              >
                <div className="flex flex-row relative justify-center ">
                  <img
                    value={button.name}
                    className="m-auto w-12/12"
                    src={button.img}
                    alt=""
                  />
                 
                  <h1 className="absolute bottom-0 w-full  text-black bg-slate-300">
                    <span className="font-bold">{button.name}</span>   <span  className="">{button.price}$</span>    
                  </h1>
                  
                </div>
              </button>
            ))}
          </div>

          <ArrowForwardIosIcon
            className="opacity-50 cursor-pointer hover:opacity-100"
            onClick={slideRight}
            size={70}
          />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
