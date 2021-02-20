import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../services/api";

import { formatStringUrl } from "../../utils";
import { Card } from "./styles";

export const Recipes = () => {
  const recipes = useSelector((state) => state.recipes);
  const dispatch = useDispatch();

  useEffect(() => {
    const load = async () => {
      const res = await api.get("recipes_index");
      dispatch({
        type: "SHOW_RECIPES_HOME",
        recipes: res.data,
      });
    };

    load();
  }, []);

  return (
    <div className="container pt-5 pb-5 border-1">
      <div className="row mt-4">
        {recipes !== null
          ? recipes.map((recipe, index) => (
              <div key={index} className="col-3">
                <a
                  href={`/recipes/${recipe.idMeal}-${formatStringUrl(
                    recipe.strMeal
                  )}`}
                  className="card-link"
                >
                  <Card>
                    <div className="image">
                      <img src={recipe.strMealThumb} />
                    </div>
                    <div className="name">
                      <span>{recipe.strMeal}</span>
                    </div>
                  </Card>
                </a>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};
