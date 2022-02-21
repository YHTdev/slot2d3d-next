import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  routes: {
    twoDManagementRoutes: [
      {
        src: "/admin/twoDManagement/",
        title: "ပေါက်ကဏန်း ကြေညာချက်",
        isAllow: true,
      },
      {
        src: "/admin/twoDManagement/section-settings",
        title: " အချိန်ပိုင်း သတ်မှတ်ချက်",
        isAllow: true,
      },
      {
        src: "/admin/twoDManagement/limitation-settings",
        title: "ကန့်သတ်ချက်",
        isAllow: true,
      },
      {
        src: "/admin/twoDManagement/commission-settings",
        title: "ကော်မရှင် သတ်မှတ်ချက်",
        isAllow: true,
      },
    ],
    threeDManamentRoutes: [
      {
        src: "/admin/threeDManagement",
        title: "ပေါက်ကဏန်း ကြေညာချက်",
        isAllow: true,
      },
      {
        src: "/admin/threeDManagement/section-settings",
        title: " အချိန်ပိုင်း သတ်မှတ်ချက်",
        isAllow: true,
      },
      {
        src: "/admin/threeDManagement/limitation-settings",
        title: "ကန့်သတ်ချက်",
        isAllow: true,
      },
    ],
    twoDBetRoutes: [
      {
        src: "/admin/slots/2d",
        title: "ဂဏန်းရွေးချယ်ခြင်း",
        isAllow: true,
      },
      {
        src: "/admin/slots/2d/limitations",
        title: "ကန့်သတ်ချက်များ",
        isAllow: true,
      },
      {
        src: "/admin/slots/2d/leger",
        title: "စာရင်း",
        isAllow: true,
      },
    ],
    threeDBetRoutes: [
      {
        src: "/admin/slots/3d",
        title: "ဂဏန်းရွေးချယ်ခြင်း",
        isAllow: true,
      },
      {
        src: "/admin/slots/3d/limitations",
        title: "ကန့်သတ်ချက်များ",
        isAllow: true,
      },
      {
        src: "/admin/slots/3d/leger",
        title: "စာရင်း",
        isAllow: true,
      },
    ],
  },
  Nums: {
    twoD: [],
    threeD: [],
  },
  Sessions: {
    twoD: [],
    threeD: [],
  },
  Keywords: {
    twoD: [],
    threeD: [],
  },
};

export const manageSlice = createSlice({
  name: "Management",
  initialState,
  reducers: {
    add2DNums: (state, action) => {
      state.Nums.twoD = [];
      state.Nums.twoD = action.payload;
    },
    add3DNums: (state, action) => {
      state.Nums.threeD = [];
      state.Nums.threeD = action.payload;
    },
    add2DSessions: (state, action) => {
      state.Sessions.twoD = [];
      state.Sessions.twoD = action.payload;
    },
    add3DSessions: (state, action) => {
      state.Sessions.threeD = [];
      state.Sessions.threeD = action.payload;
    },
    add2DKeywords: (state, action) => {
      state.Keywords.twoD = [];
      state.Keywords.twoD = action.payload;
    },
    add3DKeywords: (state, action) => {
      state.Keywords.threeD = [];
      state.Keywords.threeD = action.payload;
    },
  },
});

export const {
  add2DNums,
  add3DNums,
  add2DSessions,
  add2DKeywords,
  add3DSessions,
  add3DKeywords,
} = manageSlice.actions;

export default manageSlice.reducer;
