import React, { useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { setProducts } from "../../state/index";
function CartPage() {
  const dispatch = useDispatch();

  const dataCard = useSelector((state) => state.products);
  const [deleteItemsToCart, setItemsToDeleteToCart] = useState([]);

  const deleteToCart = (product) => {
    console.log(product)
    setItemsToDeleteToCart([...deleteItemsToCart, product]);
    // dispatch(
    //   setProducts({
    //     products: itemsToCart,
    //   })
    // );
    console.log(deleteItemsToCart);
  };

  return (
    <div>
      {dataCard === undefined ? (
        <h1>No hay productos todavia </h1>
      ) : (
        <div>
          {dataCard.map((item) => {
            return (
              <div key={item._id}>
                <img className="w-2/12" src={item.img} alt="" />
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    deleteToCart(item);
                  }}
                >
                  Drop to cart
                </Button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default CartPage;
