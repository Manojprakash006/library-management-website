import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import loginMemberReducer from "./slices/loginMemberSlice";
import collectionReducer from "../Features/Collection/Collection.Slice";

export const Store = configureStore({
  reducer: {
    auth: authReducer,
    loginMember: loginMemberReducer,
    collection: collectionReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;