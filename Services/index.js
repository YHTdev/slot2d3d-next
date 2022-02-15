import Axios from "axios";
export const Instance = Axios.create({
  baseURL: process.env.SLOT_SERVER_URL,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
  withCredentials: true,
});

export const SetupInspector = (store) => {
  Instance.interceptors.request.use(
    (config) => {
      document.body.classList.add("loading-indicator");
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  const { dispatch } = store;
  Instance.interceptors.response.use(
    (response) => {
      document.body.classList.remove("loading-indicator");
      return response;
    },
    (error) => {
      document.body.classList.remove("loading-indicator");
      return Promise.reject(error);
    }
  );
};
