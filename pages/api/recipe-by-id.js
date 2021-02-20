import { Api_themealdb } from "../../config/api";
import axios from "axios";

export default async (req, res) => {
  if (req.method === "POST") {
    const { id } = req.body;
    const response = await axios.get(`${Api_themealdb}/lookup.php?i=${id}`);
    res.json(response.data.meals[0]);
  }
};
