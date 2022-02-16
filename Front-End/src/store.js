import { configureStore } from "@reduxjs/toolkit";
import petReducer from "./redux_portfolio/reducers";

export default configureStore({
  reducer: {
    data: petReducer,
  },
});
