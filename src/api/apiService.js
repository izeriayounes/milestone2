import axios from "axios";

const API_URL = "https://localhost:7100/api";

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = API_URL;

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

export { get, post, put, remove };
