import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  list: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducer: {
    clearAll: (state) => {
      state.list = [];
    },
    removeItem: (state, action) => {
      state.list = state.list.filter((e) => {
        if (e.id === action.payload) {
          e.quantity = e.quantity - 1;
          if (e.quantity === 0) {
            return false;
          }
          return e;
        }
        return true;
      });
    },

    addItem: (state, action) => {
      let doesExist = false;
      state.list = state.list?.map((e) => {
        if (e.id === action.payload.id) {
          e.quantity = e.quantity + 1;
          doesExist = true;
          return e;
        }
        return e
      });
      if (!doesExist) {
        state.list.push({ ...action.payload, quantity: 1 });
      }
    },
  },
});

export const { addItem, removeItem, clearAll } = cartSlice.actions;
export default cartSlice.reducer;
