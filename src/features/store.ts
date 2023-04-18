import { configureStore } from "@reduxjs/toolkit";
import { showListSlice } from "./Lists/lists-slice";

export const store = configureStore({
  reducer: {
    showLists: showListSlice.reducer,
  },
  devTools: true,
});
