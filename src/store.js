import { configureStore, createSlice } from "@reduxjs/toolkit";
import { ItemList } from "./Stores/Item-Store";

const ItemInCart = createSlice({
  name: "ItemInCart",
  initialState: [],
  reducers: {
    AddToCart(state, action) {
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === action.payload.id) {
          state[i].quantity++;

          return;
        }
      }

      state.push(action.payload);
    },
  },
});

export const { AddToCart } = ItemInCart.actions;

export default configureStore({
  reducer: {
    ItemList: ItemList.reducer,
    ItemInCart: ItemInCart.reducer,
  },
});
