import axios, { AxiosResponse } from "axios";
import qs from "qs";

export const BASE_URL = "https://jsonplaceholder.typicode.com";

// const ktspUrl = process.env.NODE_ENV === 'development' ? BASE_URL : process.env.REACT_APP_BASE_URL + BASE_URL

export const http = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: function (params: any) {
    return qs.stringify(params, { arrayFormat: "repeat", allowDots: true }); /// 传递数组 paramsSerializer序列化 ids:[1,2,3] -> ids=1&ids=2&id=3
  },
});

http.interceptors.request.use(async (config) => {
  const token =
    typeof localStorage !== "undefined"
      ? localStorage.getItem("Authorization")
      : null;
  if (token) {
    config.headers.set("token", token);
  }
  return config;
});

http.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status === 200 && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
