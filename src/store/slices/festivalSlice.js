import { createSlice } from "@reduxjs/toolkit";
import { festivalIndex } from "../thunks/festivalThunk";

const festivalSlice = createSlice({
  name: 'festivalSlice',
  initialState: {
    list: [],
    page: 0,
  },
  reducers: {

  },
  estraReducers: builder => {
    builder
      .addCase(festivalIndex.fulfilled, (state, action) => {
        if(action.payload.items?.item) {
          state.list = [...state.list, ...action.payload.items.item];
        } else {
          state.list = action.payload.items.item;
        }
      })
      .addCase(festivalIndex.rejected, (state, action) => {
        state.loading = false;
      })
    }    
})

export default festivalSlice.reducer;