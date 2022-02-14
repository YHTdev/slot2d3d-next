import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  routes: {
    twoDManagementRoutes: [
      {
        src: "/admin/2d",
        title: "ပေါက်ကဏန်း ကြေညာချက်",
        isAllow: true,
      },
      {
        src: "/admin/2d/section-settings",
        title: " အချိန်ပိုင်း သတ်မှတ်ချက်",
        isAllow: true,
      },
      {
        src: "/admin/2d/limitation-settings",
        title: "ကန့်သတ်ချက်",
        isAllow: true,
      },
    ],
    threeDManamentRoutes: [
      {
        src: "/admin/3d",
        title: "ပေါက်ကဏန်း ကြေညာချက်",
        isAllow: true,
      },
      {
        src: "/admin/3d/section-settings",
        title: " အချိန်ပိုင်း သတ်မှတ်ချက်",
        isAllow: true,
      },
      {
        src: "/admin/3d/limitation-settings",
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
};

export const manageSlice = createSlice({
  name: "Management",
  initialState,
  reducers: {
    addRoutes: (state, action) => {},
  },
});

export const { addRoutes } = manageSlice.actions;

export default manageSlice.reducer;
