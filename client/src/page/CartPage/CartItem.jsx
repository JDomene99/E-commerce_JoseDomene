import React from 'react';
import { useDispatch } from 'react-redux';
// import { ChevronDown, ChevronUp } from '../icons';


const CartItem = ({product }) => {
    const dispatch = useDispatch();
   
  return (
    <article className='cart-item'>
      <img src={product.img} alt={product.name} />
      <div>
        <h4>{product.name}</h4>
        <h4 className='item-price'>${product.price}</h4>
        {/* remove button */}
        <button className='remove-btn'>remove</button>
      </div>
      <div>
        {/* increase amount */}
        <button className='amount-btn'>
          {/* <ChevronUp /> */}+
        </button>
        {/* amount */}
        {/* <p className='amount'>{amount}</p> */}
        {/* decrease amount */}
        <button className='amount-btn'>
          {/* <ChevronDown /> */}-
        </button>
      </div>
    </article>
  );
};

export default CartItem;