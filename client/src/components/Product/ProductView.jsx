import React, { useState, useEffect } from "react";

import Button from "@mui/material/Button";
import { addToCart } from "../../state/user";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../../api/products";
import { convertLength } from "@mui/material/styles/cssUtils";

function ProductView() {
  const dispatch = useDispatch();

    //parametros de la url
   const {id} = useParams();
   const [product, setProduct] = useState();

  useEffect(() => {
    const fetchData = async () => {
    const response = await getProduct(id);
    setProduct(response);
    };
    fetchData();

  }, []);

  const handleAddToCart = (product) => {
    dispatch(
      addToCart(product)
    )
  };
  return (
    <div className="flex flex-row flex-wrap">
        {/* <img src={product.img} alt={product.name} className="w-6/12" />

        <div className="w-6/12">
            <h1>{product.name}</h1>
            <h1>{product.price}</h1>
            <h2>Selecciona tu talla</h2>
            <p>{product.description}</p>
            <div className="flex flex-row flex-wrap gap-4 text-center">

            
            {
                product.size.map((size) => {
                    return (
                        <div key={size} className="border-gray-300 border-2 w-1/12 hover:border-black">
                            {size}
                        </div>
                    )
                })
            }
            </div> */}
            <Button
            onClick={() => handleAddToCart(product)}
            >
                Add to cart
            </Button>
        {/* </div> */}
    
    </div>
  );
}

export default ProductView;
