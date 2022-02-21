import Axios from "axios";
import { add2DNums, add3DNums } from "../store/reducers/manage";
import { setCredentials } from "../store/reducers/user";

export const Instance = Axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
  withCredentials: true,
});

export const SetupInspector = (store) => {
  Instance.interceptors.request.use(
    async (config) => {
      document.body.classList.add("loading-indicator");
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  const { dispatch } = store;
  Instance.interceptors.response.use(
    async (response) => {
      if (response.config.url === "/auth/get_status") {
        if (
          response.data &&
          response.data.statusCode === 200 &&
          response.data.Data
        ) {
          dispatch(setCredentials(response.data.Data));
        }
        const response3D = await Instance({
          url: "/settings/nums/3d/getnums",
        });
        if (
          response3D.data &&
          response3D.data.Data &&
          response3D.data.statusCode === 200
        ) {
          dispatch(add3DNums(response3D.data.Data));
        }
        const response2D = await Instance({
          url: "/settings/nums/2d/getnums",
        });
        if (
          response2D.data &&
          response2D.data.Data &&
          response2D.data.statusCode === 200
        ) {
          dispatch(add2DNums(response2D.data.Data));
        }
      }
      document.body.classList.remove("loading-indicator");
      return response;
    },
    (error) => {
      document.body.classList.remove("loading-indicator");
      return Promise.reject(error);
    }
  );
};
