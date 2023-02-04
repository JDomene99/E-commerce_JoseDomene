import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  products: [],
  cart: [],
  amount: 0,
  total: 0,
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
    setProducts: (state, action) => {
      state.products = action.payload.products;
    },
    setProduct: (state, action) => {
      const updateProduct = state.products.map((post) => {
        if (product._id === action.payload.product._id) return action.payload.product;
        return product;
      });
      state.products = updateProduct;
    },
    setitemToCart : (state, action) => {
      state.cart.push(action.payload.cartItems);
    },
    clearCart: (state) => {
      state.cart = [];
    },
    setitemToCart : (state, action) => {
      state.cart.push(action.payload.cartItems);
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cart = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
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

export const { setLogin, setLogout, setProducts,setitemToCart,removeItem,increase, decrease, calculateTotals,clearCart} =
  authSlice.actions;
export default authSlice.reducer;