import axios from "axios";
import { toast } from "react-toastify";

const API_URL = "https://localhost:7100/api";

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = API_URL;

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      if (window.location.pathname !== "/login") {
        window.location.pathname = "/login";
      }
    }
    return Promise.reject(error);
  }
);

const setAuthToken = (token) => {
  if (token) {
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers.common["Authorization"];
  }
};

const token = localStorage.getItem("token");
setAuthToken(token);

const get = async (route) => {
  try {
    const response = await axiosInstance.get(route);
    return response.data;
  } catch (error) {
    console.error(`Error getting ${route}:`, error);
    throw error;
  }
};

const postOrPut = async (method, route, data) => {
  try {
    const response = await axiosInstance[method](route, data);
    console.log(
      `${method === "post" ? "Posted to" : "Edited"} ${route} successfully`
    );
    return response;
  } catch (error) {
    console.error(
      `Error ${method === "post" ? "posting" : "putting"} data to ${route}:`,
      error.code + error.message
    );
    throw error;
  }
};

const post = async (route, data) => {
  return await postOrPut("post", route, data);
};

const put = async (route, data) => {
  return await postOrPut("put", route, data);
};

const remove = async (route) => {
  try {
    await axiosInstance.delete(route);
    console.log(`Deleted ${route} successfully`);
  } catch (error) {
    console.error(`Error deleting data at ${route}:`, error);
    throw error;
  }
};

const login = async (creds) => {
  try {
    const response = await axiosInstance.post("/Customers/login", creds);
    const token = response.data.token;
    const userId = response.data.customerId;
    localStorage.setItem("token", token);
    localStorage.setItem("userId", userId);
    setAuthToken(token);
    return response.data;
  } catch (error) {
    console.error("Login error:", error.message);
    throw error;
  }
};

const logout = async () => {
  localStorage.removeItem("token");
  setAuthToken(null);
  toast.success(`You have been logged out!`);
};

export { get, post, put, remove, login, logout };
