import axios from "axios";

const api = axios.create({
  baseURL: "https://test-topi-git-master-carlosstenzel.vercel.app/api",
});

export default api;
