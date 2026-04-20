import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBrowseBooksApi } from "../service/collection.Service";
import type { Book } from "../../DataTypes/Type";

export const fetchBrowseBooksData = createAsyncThunk< { books: Book[]; total: number } >(
  "browseBooks/fetchBrowseBooksData", async (_, thunkAPI) => {
    try {
      const response = await getBrowseBooksApi();
      return {
        books: response.data,
        total: response.total,
      };

    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);
