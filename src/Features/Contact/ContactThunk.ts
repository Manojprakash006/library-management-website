import { createAsyncThunk } from "@reduxjs/toolkit";
import { getLibraryInfoApi, sendContactMessageApi } from "../service/contact.Service";

export const fetchLibraryInfoThunk = createAsyncThunk(
  "contact/fetchInfo",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getLibraryInfoApi();
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error || "Failed to fetch library info");
    }
  }
);

export const sendContactMessageThunk = createAsyncThunk(
  "contact/sendMessage",
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await sendContactMessageApi(data);
      return response;
    } catch (error: any) {
      return rejectWithValue(error || "Failed to send message");
    }
  }
);
