import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { registerMemberThunk } from "../thunks/authThunk";

interface AuthState {
  member: any | null,
  loading: boolean,
  success: boolean,
  error: string | null
}

const initialState: AuthState = {
  member: null,
  loading: false,
  success: false,
  error: null,
}

export const authSlice = createSlice({
  name: 'memberAuth',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    
    builder
      .addCase(registerMemberThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(registerMemberThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.member = action.payload;
      })

      .addCase(registerMemberThunk.rejected, (state, action) => {
        console.log("Registration Error", action);
        state.loading = false;
        state.error = action.payload as string|| "Registration failed"
      })
  }
});

export default authSlice.reducer;