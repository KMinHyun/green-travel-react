import { configureStore } from "@reduxjs/toolkit";
import festivalReducer from './slices/festivalSlice.js'
import festivalDetailReducer from './slices/festivalDetailSlice.js'

export default configureStore({
  reducer: {
    festival: festivalReducer,
    festivalDetail: festivalDetailReducer,
  }
});