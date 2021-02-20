import { Api_themealdb } from "../../config/api";
import axios from "axios";

export default async (req, res) => {
  if (req.method === "POST") {
    const { name } = req.body;
    const response = await axios.get(`${Api_themealdb}/search.php?s=${name}`);
    res.json(response.data.meals);
  }
};
