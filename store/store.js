import { configureStore } from "@reduxjs/toolkit";
import ManageReducer from "./reducers/manage";
import UserReducer from "./reducers/user";
export const store = configureStore({
  reducer: {
    management: ManageReducer,
    auth: UserReducer,
  },
});
