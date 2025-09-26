import { createSlice } from "@reduxjs/toolkit";
import { festivalIndex } from "../thunks/festivalThunk";

const festivalSlice = createSlice({
  name: 'festivalSlice',
  initialState: {
    list: [],
    page: 0,
    scrollEventFlg: true,
    showTopButton: false,
  },
  reducers: {
    setScrollEventFlg: (state, action) => {
      state.scrollEventFlg = action.payload;
    },
    setShowTopButton: (state, action) => {
      state.showTopButton = action.payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(festivalIndex.fulfilled, (state, action) => {
        if(action.payload.items?.item) {
          state.list = [...state.list, ...action.payload.items.item];
          state.page = action.payload.pageNo;
          state.scrollEventFlg = true;
        } else {
          state.scrollEventFlg = false;
        }
      })
      .addMatcher(action => action.type.endsWith('/rejected'), (state, action) => console.log('Error!', action.error));
  }    
});

export const { setScrollEventFlg, setShowTopButton } = festivalSlice.actions;

export default festivalSlice.reducer;