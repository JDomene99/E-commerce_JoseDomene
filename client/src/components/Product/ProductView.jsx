import React, { useState, useEffect } from "react";

import Button from "@mui/material/Button";
import { setitemToCart } from "../../state/index";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../../api/products";

function ProductView() {
  const dispatch = useDispatch();

    //parametros de la url
   const {id} = useParams();
   const [product, setProduct] = useState();

  useEffect(() => {
    const fetchData = async () => {
    const response = await getProduct(id);
    console.log(response);
    setProduct(response);
    };
    fetchData();

  }, [id]);

  const addToCart = (product) => {
    dispatch(
      setitemToCart({
        cartItems: product,
      })
    );
  };
  return (
    <div className="flex flex-row flex-wrap">
        <img src={product.img} alt={product.name} className="w-6/12" />

        <div className="w-6/12">
            <h1>{product.name}</h1>
            <h1>{product.price}</h1>
            <h2>Selecciona tu talla</h2>
            <p>{product.description}</p>
           
            <Button
            // onClick={}
            >
                Add to cart
            </Button>
        </div>
    
    </div>
  );
}

export default ProductView;
