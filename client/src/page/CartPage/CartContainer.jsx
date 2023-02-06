import React from 'react';
import CartItem from './CartItem';
import { useSelector,useDispatch } from 'react-redux';
import { clearCart } from "../../state/user";
import { useNavigate } from "react-router-dom";

const CartContainer = () => {
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems)
  const amount = 2;
  const total = 2;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const getTotalQuantity = () => {
  //   let total = 0
  //   cart.forEach(item => {
  //     console.log(item);
  //     total += item.quantity
  //   })
  //   return total
  // }
  
  if (amount < 1) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h1>Your Cart</h1>
      </header>
      {/* cart items */}
      <div>
        {cartItems.map((item) => {
            if(item !=null){
                return <CartItem key={item._id} product={item} />;
            }
          
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            {/* total <span>${getTotalQuantity()}</span> */}
          </h4>
        </div>
        <button
      className='btn clear-btn'
      onClick={() => {
        dispatch(clearCart());
        navigate('/')
      }}
    >
      clear cart
    </button>
      </footer>
    </section>
  );
};

export default CartContainer;