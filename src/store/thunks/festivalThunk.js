import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosConfig from "../../configs/axiosConfig";
import { dateFormatter } from "../../utils/dateFormatter";
import { dateCalculater } from "../../utils/dateCalculater";

const festivalIndex = createAsyncThunk(
  'festivalSlice/festivalIndex',
  async (arg, thunkAPI) => {
    const state = thunkAPI.getState();
    const pastDateYMD = dateFormatter.formatDateToYMD(dateCalculater.getPastDate((1000*60*60*24*30)));
    
    const url = `${axiosConfig.BASE_URL}/searchFestival2`;
    const params = {
      serviceKey: axiosConfig.SERVICE_KEY,
      MobileOS: axiosConfig.MOBILE_OS,
      MobileApp: axiosConfig.MOBILE_APP,
      _type: axiosConfig.TYPE,
      arrange: axiosConfig.ARRANGE,
      numOfRows: axiosConfig.NUM_OF_ROWS,
      pageNo: state.festival.page + 1,
      eventStartDate: pastDateYMD,
    }

    const response = await axios.get(url, { params });

    return response.data.response.body;
  }
);

export { festivalIndex }