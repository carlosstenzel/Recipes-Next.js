import { Api_themealdb } from "../../config/api";
import axios from "axios";

export default async (req, res) => {
  if (req.method === "POST") {
    const { category } = req.body;
    const response = await axios.get(
      `${Api_themealdb}/filter.php?c=${category}`
    );
    res.json(response.data.meals);
  }
};
