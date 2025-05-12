import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  cartItems: [],
  totalAmount: 0,
};

const calculateTotalAmount = (cartItems) =>
  cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartUser(state, action) {
      state.userId = action.payload;
    },
      addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.cartItems.find((item) => item._id === product._id);
    
      if (state.userId !== product.userId) {
        state.cartItems = [];
        state.totalAmount = 0;
        state.userId = product.userId;
      }

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push(product);
      }
    
      state.totalAmount = calculateTotalAmount(state.cartItems);

    },
    
    removeFromCart: (state, action) => {
      const product = action.payload;
      state.cartItems = state.cartItems.filter((item) => item._id !== product._id);

      state.totalAmount = calculateTotalAmount(state.cartItems);
    },

    increaseQuantity: (state, action) => {
      const { _id, quantity } = action.payload;
      const item = state.cartItems.find((item) => item._id === _id);
      if (item) {
        item.quantity = quantity;
      }
      state.totalAmount = calculateTotalAmount(state.cartItems);
    },
    
  
    decreaseQuantity: (state, action) => {
      const product = action.payload;
      const item = state.cartItems.find((item) => item._id === product._id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      state.totalAmount = calculateTotalAmount(state.cartItems);
    },
    clearCart(state) {
      state.cartItems = [];
      state.totalAmount = 0;
      state.userId = null;
    },
  },
});

export const { addToCart,setCartUser,clearCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
