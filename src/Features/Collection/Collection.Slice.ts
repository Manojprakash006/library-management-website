import { createSlice } from "@reduxjs/toolkit";
import { fetchBrowseBooksData, fetchTotalMembers, fetchCollectionStats } from "../../Features/Collection/CollectionThunk";
import type { Book } from "../../DataTypes/Type";

interface browseBookState {
  books: Book[];
  totalBooks: number;
  totalMembers: number;
  collectionStats: {
    newArrivals: number;
    bestSellers: number;
    reference: number;
    children: number;
    academic: number;
    ebooks: number;
  } | null;
  loading: boolean;
  error: string | null;
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

const initialState: browseBookState = {
  books: [],
  totalBooks: 0,
  totalMembers: 0,
  collectionStats: null,
  loading: false,
  error: null as string | null,
  total: 0,
  page: 1,
  limit: 10,
  totalPages: 0,
};

const browswBooksSlice = createSlice({
  name: "browseBooks",
  initialState,
  reducers: {
    setPagination: (state, action) => {
      state.page = action.payload.page;
      state.limit = action.payload.limit;
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchBrowseBooksData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchBrowseBooksData.fulfilled, (state, action) => {
        state.loading = false;
        if (Array.isArray(action.payload)) {
          state.books = action.payload;
          state.total = action.payload.length;
          state.totalBooks = action.payload.length;
          state.page = 1;
          state.limit = action.payload.length;
          state.totalPages = 1;
        } else if (action.payload && action.payload.data) {
          state.books = action.payload.data;
          state.total = action.payload.total || 0;
          state.totalBooks = action.payload.total || 0;
          state.page = action.payload.page || 1;
          state.limit = action.payload.limit || 10;
          state.totalPages = action.payload.totalPages || 0;
        } else {
          state.books = [];
          state.total = 0;
          state.totalBooks = 0;
          state.totalPages = 0;
        }
      })

      .addCase(fetchBrowseBooksData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      })
      .addCase(fetchTotalMembers.fulfilled, (state, action) => {
        state.totalMembers = action.payload.data || 0;
      })
      .addCase(fetchCollectionStats.fulfilled, (state, action) => {
        state.collectionStats = action.payload.data || null;
      });
  },
});

export default browswBooksSlice.reducer;
