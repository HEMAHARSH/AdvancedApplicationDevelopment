import { createSlice } from "@reduxjs/toolkit";
import productData from "../Components/ProductData";

// Check if cart data exists in local storage and use it as initial state if available
const localStorageCart = JSON.parse(sessionStorage.getItem("cart")) || [];

const initialState = {
  cart: localStorageCart,
  items: productData,
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemToAdd = {
        ...action.payload,
        date1: "", // Initialize with empty dates
        date2: "",
      };
      state.cart.push(itemToAdd);
      sessionStorage.setItem("cart", JSON.stringify(state.cart));
    },
    // Add new actions to set dates for an item
    setCheckInDate: (state, action) => {
      const { itemId, checkInDate } = action.payload;
      const item = state.cart.find((item) => item.id === itemId);
      if (item) {
        item.date1 = checkInDate;
        sessionStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    setCheckOutDate: (state, action) => {
      const { itemId, checkOutDate } = action.payload;
      const item = state.cart.find((item) => item.id === itemId);
      if (item) {
        item.date2 = checkOutDate;
        sessionStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
    getCartTotal: (state) => {
      let totalQuantity = 0;
      let totalPrice = 0;

      for (const item of state.cart) {
        totalQuantity += item.quantity;
        totalPrice += item.price;
      }

      state.totalQuantity = totalQuantity;
      state.totalPrice = totalPrice;

      sessionStorage.setItem("cart", JSON.stringify(state.cart));
    },
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cart.find((item) => item.id === newItem.id);

      if (existingItem) {
        // If the item already exists, increase its quantity
        existingItem.quantity += newItem.quantity;
      } else {
        // If the item doesn't exist, add it to the cart
        state.cart.push(newItem);
      }
    
      state.totalQuantity += newItem.quantity; // Update total quantity
      state.totalPrice += newItem.price * newItem.quantity; // Update total price
    
      // You can also update your sessionStorage here, if needed
      sessionStorage.setItem("cart", JSON.stringify(state.cart));
    
    },


    removeItem: (state, action) => {
      const itemId = action.payload;
      const itemIndex = state.cart.findIndex((item) => item.id === itemId);

      if (itemIndex !== -1) {
        const itemToRemove = state.cart[itemIndex];
        
        if (!itemToRemove.paid) {
          // If the item is not paid, remove it from the cart and update local storage
          state.cart.splice(itemIndex, 1);
          sessionStorage.setItem("cart", JSON.stringify(state.cart));
        }
      }
    },
    setCart: (state, action) => {
      // Ensure that each item in the new cart structure includes date1 and date2
      const newCart = action.payload.map((item) => ({
        ...item,
        date1: "",
        date2: "",
      }));
      state.cart = newCart;
      sessionStorage.setItem("cart", JSON.stringify(newCart));
    },
    clearCart: (state) => {
      state.cart = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      sessionStorage.removeItem("cart"); // Remove cart data from local storage
    },
  },
});

export const {
  addToCart,
  addItem,
  setCheckInDate,setCheckOutDate,
  setCart,
  clearCart,
  setTotalPrice,
  getCartTotal,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
