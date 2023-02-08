import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  size: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSize: (state, action) => {
        console.log(action.payload);
        state.size = action.payload;
    },
   
    
   
  },
});

export const {
  setSize,
  
} = productSlice.actions;
export default productSlice.reducer;
