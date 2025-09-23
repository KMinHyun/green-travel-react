import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const festivalIndex = createAsyncThunk(
  'festivalSlice/festivalIndex',
  async () => {
    const response = await axios.get('https://apis.data.go.kr/B551011/KorService2/searchFestival2');

    return response.data.response.body;
  }
);

export { festivalIndex }