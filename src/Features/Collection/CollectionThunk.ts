import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBrowseBooksApi, getCollectionStatsApi } from "../service/collection.Service";
import { getTotalMembersApi, getVisitorStatsApi } from "../service/member.Service";
import type { Book } from "../../DataTypes/Type";

export const fetchBrowseBooksData = createAsyncThunk<any, { page: number; limit: number; search?: string; category?: string } | undefined>(
  "browseBooks/fetchBrowseBooksData",
  async (params, thunkAPI) => {
    try {
      const response = await getBrowseBooksApi(params);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const fetchTotalMembers = createAsyncThunk(
  "browseBooks/fetchTotalMembers",
  async (_, thunkAPI) => {
    try {
      const response = await getTotalMembersApi();
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const fetchCollectionStats = createAsyncThunk(
  "browseBooks/fetchCollectionStats",
  async (_, thunkAPI) => {
    try {
      const response = await getCollectionStatsApi();
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const fetchVisitorStats = createAsyncThunk(
  "browseBooks/fetchVisitorStats",
  async (_, thunkAPI) => {
    try {
      const response = await getVisitorStatsApi();
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
