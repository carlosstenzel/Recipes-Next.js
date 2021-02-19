import { Api_themealdb } from "../../config/api";
import axios from "axios";

export default async (req, res) => {
  if (req.method === "GET") {
    const response = await axios.get(`${Api_themealdb}/categories.php`);
    res.json(response.data.categories);
  }
};
