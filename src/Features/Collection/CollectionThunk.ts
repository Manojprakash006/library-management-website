import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBrowseBooksApi } from "../service/collection.Service";
import type { Book } from "../../DataTypes/Type";

export const fetchBrowseBooksData = createAsyncThunk<Book[]>(
  "browseBooks/fetchBrowseBooksData",
  async (_, thunkAPI) => {
    try {
      const response = await getBrowseBooksApi();
      console.log(response,"message");
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);
