import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_END_POINTS } from "../../api/httpEndPoints";
import httpClient from "../../api/httpClient";

interface loginPayload {
  email: string,
  password: string
}

export const loginMemberThunk = createAsyncThunk<any, loginPayload, { rejectValue: string} > (
  "member-auth/loginMember", async(payload: loginPayload, { rejectWithValue}) => {
    try {
      const response = await httpClient.post(API_END_POINTS.auth.login, payload);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.message || "Login Failed");
    }
  }
)