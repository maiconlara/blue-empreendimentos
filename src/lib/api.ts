import axios from "axios";

const apiUrl = "";

export const api = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export default api;