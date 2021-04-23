import axios from "axios";

const api = axios.create({
  baseURL: "https://recipes-next-js.vercel.app/api",
});

export default api;
