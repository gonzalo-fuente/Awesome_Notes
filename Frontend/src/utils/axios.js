import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT || "http://localhost:5000/",
  headers: {
    "Content-Type": "application/json",
  },
});
