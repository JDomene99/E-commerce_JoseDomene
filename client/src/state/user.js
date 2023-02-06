import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  cart : [],
    total : 0,
    amount : 0,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
    },
    setLogout: (state) => {
      state.user = null;
    },
    addToCart: (state, action) => {
       
      const itemInCart = state.cart.find((item) => item._id === action.payload._id);
        if (itemInCart) {
          itemInCart.quantity++;
          itemInCart.totalAmount = itemInCart.quantity* action.payload.price;
        } else {
          state.cart.push({ ...action.payload, quantity: 1 });
        }
       
      },
      clearCart: (state) => {
        state.cart = null;
      },
      incrementQuantity: (state, action) => {
          const item = state.cart.find((item) => item.id === action.payload);
          item.quantity++;
        },
        decrementQuantity: (state, action) => {
          const item = state.cart.find((item) => item.id === action.payload);
          if (item.quantity === 1) {
            item.quantity = 1
          } else {
            item.quantity--;
          }
        },
        removeItem: (state, action) => {
          const removeItem = state.cart.filter((item) => item.id !== action.payload);
          state.cart = removeItem;
        },
      calculateTotals: (state) => {
        let amount = 0;
        let total = 0;
        state.cart.forEach((item) => {
          amount += item.amount;
          total += item.amount * item.price;
        });
        state.amount = amount;
        state.total = total;
      },
   
  },
});

export const {
  setLogin,
  setLogout,
  addToCart,
  removeItem,
  increase,
  decrease,
  calculateTotals,
  clearCart
} = authSlice.actions;
export default authSlice.reducer;
