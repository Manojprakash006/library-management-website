import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_END_POINTS } from "../../api/httpEndPoints";
import httpClient from "../../api/httpClient";

interface RegisterPayload {
  name: string,
  email: string,
  phone: string,
  address: string,
  password: string
}

export const registerMemberThunk = createAsyncThunk<any, RegisterPayload, { rejectValue: string }>(
  "auth/registerMember", async(payload: RegisterPayload, {rejectWithValue}) => {
    try {
      const response = await httpClient.post(API_END_POINTS.auth.register, payload);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.message || "Registration Failed"); 
    }
  }
);

export const forgotPasswordThunk = createAsyncThunk<any, string, { rejectValue: string }>(
  "auth/forgotPassword", async(email: string, {rejectWithValue}) => {
    try {
      const response = await httpClient.post(API_END_POINTS.auth.forgotPassword, { email });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.message || "Forgot Password Request Failed");
    }
  }
);

export const resetPasswordThunk = createAsyncThunk<any, any, { rejectValue: string }>(
  "auth/resetPassword", async(payload: any, {rejectWithValue}) => {
    try {
      const response = await httpClient.post(API_END_POINTS.auth.resetPassword, payload);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.message || "Reset Password Failed");
    }
  }
);