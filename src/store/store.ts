import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import loginMemberReducer from "./slices/loginMemberSlice";

export const Store = configureStore({
  reducer: {
    auth: authReducer,
    loginMember: loginMemberReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;