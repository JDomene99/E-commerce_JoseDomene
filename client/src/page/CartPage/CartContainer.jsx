import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../state/cart";
import { useNavigate } from "react-router-dom";


const CartContainer = () => {
  
 
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  if (cart.cart == null) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="py-10">
      <header className="w-5/12 mx-auto">
        <h1>Your Cart</h1>
      </header>

      <div className="flex flex-col gap-y-6">
        {cart.cart.map((item) => {
          return <CartItem key={item._id} product={item} />;
        })}
      </div>

      <footer className="w-5/12 mx-auto " >
        <hr />
      
          <h4>Total <span className="font-bold">${cart.total}</span></h4>
          <div className="flex flex-row flex-wrap justify-between">
        <button
          className="bg-gray-500 px-10 py-2 border-4 border-white text-white rounded-lg hover:opacity-70"
          onClick={() => {
            dispatch(clearCart());
            navigate("/");
          }}
        >
          Clear cart
        </button>

        <button
          className="bg-black px-10 py-2 border-4 border-white text-white rounded-lg hover:opacity-70"
          onClick={() => {
            dispatch(clearCart());
            navigate("/");
          }}
        >
         Comprar
        </button>
        </div>
      </footer>
    </section>
  );
};

export default CartContainer;
