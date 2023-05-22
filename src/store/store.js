import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../components/todoSlice/todoSlice";

const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
});

export default store;