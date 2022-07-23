import { configureStore, createSlice } from "@reduxjs/toolkit";
import { ItemList } from "./Stores/Item-Store";
import { PortpolioItems } from "./Stores/Portpolio-Items-Store";

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
    setItemQuantity(state, action) {
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === action.payload[0].id) {
          state[i].quantity = action.payload[1];
        }
      }
    },
  },
});

export const { AddToCart, setItemQuantity } = ItemInCart.actions;

export default configureStore({
  reducer: {
    ItemList: ItemList.reducer,
    ItemInCart: ItemInCart.reducer,
    PortpolioItems: PortpolioItems.reducer,
  },
});
