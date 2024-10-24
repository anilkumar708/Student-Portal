import { configureStore } from "@reduxjs/toolkit";
import nodeData from "./dataSlice";

const store = configureStore({
  reducer: { nodeData },
});

export default store;
