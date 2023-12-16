import { configureStore } from "@reduxjs/toolkit";
import portfolioSlice from "./slice/portfolioSlice";

export default configureStore({
  reducer: {
    portfolio: portfolioSlice.reducer,
  },
});
