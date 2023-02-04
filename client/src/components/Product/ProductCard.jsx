import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";;
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { setitemToCart } from "../../state/index";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


function ProductCard({product}) {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(`/product/${product._id}`)}>
        <Card className="xs:w-11/12 sm:w-5/12 2xl:w-3/12">
          <CardMedia sx={{ height: 350 }} image={product.img} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <h1>{product.name}</h1>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
          </CardContent>
        </Card>
      </button>
    </div>
  );
}

export default ProductCard;
