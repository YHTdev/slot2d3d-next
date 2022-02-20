import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  user:null,
  loginTm: "",
};

const userSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.isAuth = true;
      state.user = action.payload;
      state.loginTm = new Date().toLocaleString();
    },
  },
});

export const { setCredentials } = userSlice.actions;

export default userSlice.reducer;
