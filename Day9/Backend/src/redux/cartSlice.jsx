import { createSlice } from "@reduxjs/toolkit";

// Function to load cart state from local storage
const loadCartState = () => {
  try {
    const serializedCartState = localStorage.getItem("cartState");
    if (serializedCartState === null) {
      return undefined;
    }
    return JSON.parse(serializedCartState);
  } catch (err) {
    return undefined;
  }
};

// Function to save cart state to local storage
const saveCartState = (state) => {
  try {
    const serializedCartState = JSON.stringify(state);
    localStorage.setItem("cartState", serializedCartState);
  } catch {
    // Ignore write errors
  }
};

const initialState = {
  carts: [],
  totalQuantity: 0,
  totalPrice: 0,
};

// Load initial state from local storage
const persistedCartState = loadCartState();

const cartSlice = createSlice({
  name: "cartslice",
  initialState: persistedCartState || initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.carts[itemIndex].qnty += 1;
      } else {
        const temp = { ...action.payload, qnty: 1 };
        state.carts = [...state.carts, temp];
      }
      saveCartState(state); // Save updated state to local storage
    },
    removeToCart: (state, action) => {
      const data = state.carts.filter((ele) => ele.id !== action.payload);
      state.carts = data;
      saveCartState(state); // Save updated state to local storage
    },
    removeSingleIteams: (state, action) => {
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.carts[itemIndex].qnty >= 1) {
        state.carts[itemIndex].qnty -= 1;
      }
      saveCartState(state); // Save updated state to local storage
    },
    getCartTotal: (state, action) => {
      let totalQuantity = 0;
      let totalPrice = 0;
      state.carts.forEach((item) => {
        totalQuantity += item.qnty;
        totalPrice += item.qnty * item.price;
      });
      state.totalQuantity = totalQuantity;
      state.totalPrice = totalPrice;
      saveCartState(state); // Save updated state to local storage
    },
    emptycartIteam: (state, action) => {
      state.carts = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      saveCartState(state); // Save updated state to local storage
    },
  },
});

export const {
  addToCart,
  removeToCart,
  removeSingleIteams,
  getCartTotal,
  emptycartIteam,
} = cartSlice.actions;

export default cartSlice.reducer;
