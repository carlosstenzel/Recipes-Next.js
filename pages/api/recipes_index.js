import { Api_themealdb } from "../../config/api";
import axios from "axios";

export default async (req, res) => {
  if (req.method === "GET") {
    const response = await axios.get(`${Api_themealdb}/filter.php?c=Beef`);
    res.json(response.data.meals);
  }
};
