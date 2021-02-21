import Cors from "cors";
import { Api_themealdb } from "../../config/api";
import axios from "axios";
import initMiddleware from "../../lib/init-middleware";

const cors = initMiddleware(
  Cors({
    methods: ["GET"],
  })
);

export default async (req, res) => {
  await cors(req, res);
  if (req.method === "GET") {
    const response = await axios.get(`${Api_themealdb}/categories.php`);
    res.json(response.data.categories);
  }
};
