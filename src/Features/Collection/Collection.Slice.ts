import { createSlice } from "@reduxjs/toolkit";
import { fetchBrowseBooksData } from "../../Features/Collection/CollectionThunk";
import type { Book } from "../../DataTypes/Type";

interface browseBookState {
  books: Book[];
  totalBooks: number;
  loading: boolean;
  error: string | null;
}

const initialState: browseBookState = {
  books: [],
  totalBooks: 0,
  loading: false,
  error: null as string | null,
};

const browswBooksSlice = createSlice({
  name: "browseBooks",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchBrowseBooksData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchBrowseBooksData.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload.books;
        state.totalBooks = action.payload.total;
      })

      .addCase(fetchBrowseBooksData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default browswBooksSlice.reducer;
