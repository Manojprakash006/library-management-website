import { createSlice } from "@reduxjs/toolkit";
import { fetchLibraryInfoThunk, sendContactMessageThunk } from "./ContactThunk";

interface ContactState {
  libraryInfo: any | null;
  isLoading: boolean;
  isSubmitting: boolean;
  error: string | null;
}

const initialState: ContactState = {
  libraryInfo: null,
  isLoading: false,
  isSubmitting: false,
  error: null,
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLibraryInfoThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchLibraryInfoThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.libraryInfo = action.payload;
      })
      .addCase(fetchLibraryInfoThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(sendContactMessageThunk.pending, (state) => {
        state.isSubmitting = true;
      })
      .addCase(sendContactMessageThunk.fulfilled, (state) => {
        state.isSubmitting = false;
      })
      .addCase(sendContactMessageThunk.rejected, (state) => {
        state.isSubmitting = false;
      });
  },
});

export default contactSlice.reducer;
