import { configureStore } from "@reduxjs/toolkit";
import temoignageSliceRdeucer from "./features/temoignagesSlice";

const store = configureStore({
  reducer: {
    temoignage: temoignageSliceRdeucer,
  },
});

export default store;
