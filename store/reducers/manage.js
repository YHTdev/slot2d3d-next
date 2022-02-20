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
      {
        src: "/admin/twoDManagement/keywords-settings",
        title: "အသုံးနှုတ်း သတ်မှတ်ချက်",
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
    towD: [],
    threeD: [],
  },
};

export const manageSlice = createSlice({
  name: "Management",
  initialState,
  reducers: {
    add2DNums: (state, action) => {
      state.Nums.towD = [];
      state.Nums.towD = action.payload;
    },
    add3DNums: (state, action) => {
      state.Nums.threeD = [];
      state.Nums.threeD = action.payload;
    },
  },
});

export const { add2DNums, add3DNums } = manageSlice.actions;

export default manageSlice.reducer;
