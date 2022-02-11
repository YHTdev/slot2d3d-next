import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  usrNm: "",
  accessToken: "",
  loginTm: "",
};

const userSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.isAuth = true;
      state.accessToken = action.payload.accessToken;
      state.usrNm = action.payload.userNm;
      state.loginTm = new Date().toLocaleString();
    },
  },
});

export const { setCredentials } = userSlice.actions;

export default userSlice.reducer;
