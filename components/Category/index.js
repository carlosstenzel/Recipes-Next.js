import { useEffect, useState } from "react";
import api from "../../services/api";
import { useDispatch } from "react-redux";

import { Carousel } from "../../styles/utils";
import { Card } from "./styles";

export const Category = () => {
  const [categoryRecipes, setCategoryRecipes] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const load = async () => {
      const res = await api.get("category");
      setCategoryRecipes(res.data);
    };

    load();
  }, []);

  const getByCategory = async (category) => {
    const res = await api.post("recipes-by-category", {
      category: category,
    });

    dispatch({
      type: "SHOW_RECIPES_HOME",
      recipes: res.data,
    });
  };

  return (
    <div className="container pt-5 pb-5">
      <div className="row">
        <h3 className="text-back-2">Categories</h3>
        <Carousel>
          {categoryRecipes !== null
            ? categoryRecipes.map((itemCategory, index) => (
                <div
                  key={index}
                  className="col-sm"
                  onClick={() => getByCategory(itemCategory.strCategory)}
                >
                  <Card>
                    <img src={itemCategory.strCategoryThumb} />
                    <span>{itemCategory.strCategory}</span>
                  </Card>
                </div>
              ))
            : null}
        </Carousel>
      </div>
    </div>
  );
};
