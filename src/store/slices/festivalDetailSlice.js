import { createSlice } from "@reduxjs/toolkit";

const festivalDetailSlice = createSlice({
  name: 'festivalDetailSlice',
  initialState: {
    festivalInfo: {},
  },
  reducers: {
    setFestivalInfo(state, action) {
      state.festivalInfo = action.payload;
    }
  }
});

export const { setFestivalInfo } = festivalDetailSlice.actions;

export default festivalDetailSlice.reducer;