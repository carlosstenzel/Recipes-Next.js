import Cors from "cors";
import { Api_themealdb } from "../../config/api";
import axios from "axios";
import initMiddleware from "../../lib/init-middleware";

const cors = initMiddleware(
  Cors({
    methods: ["POST"],
  })
);

export default async (req, res) => {
  await cors(req, res);
  if (req.method === "POST") {
    const { id } = req.body;
    const response = await axios.get(`${Api_themealdb}/lookup.php?i=${id}`);
    res.json(response.data.meals[0]);
  }
};
