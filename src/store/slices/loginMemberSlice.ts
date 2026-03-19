import { createSlice } from "@reduxjs/toolkit";
import { loginMemberThunk } from "../thunks/loginMemberThunk";

interface LoginMemberState {
  member: any | null,
  loading: boolean,
  success: boolean,
  error: string | null
}

const initialState: LoginMemberState = {
  member: null,
  loading: false,
  success: false,
  error: null,
}

export const loginMemberSlice = createSlice({
  name: 'loginMemberSlice',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
      
      builder
        .addCase(loginMemberThunk.pending, (state) => {
          state.loading = true;
          state.error = null;
          state.success = false;
        })
  
        .addCase(loginMemberThunk.fulfilled, (state, action) => {
          state.loading = false;
          state.success = true;
          state.member = action.payload.data;
        })
  
        .addCase(loginMemberThunk.rejected, (state, action) => {
          console.log("Login Error", action);
          state.loading = false;
          state.error = (action.payload as string) || action.error.message || "Login failed";
        })
  }
});

export default loginMemberSlice.reducer;