import { useEffect, useState } from "react";
import api from "../../services/api";
import { Card, Carousel } from "./styles";

export const Category = () => {
  const [categoryRecipes, setCategoryRecipes] = useState(null);
  useEffect(() => {
    async function Load() {
      const res = await api.get("category");
      setCategoryRecipes(res.data);
    }

    Load();
  }, []);
  return (
    <div className="container-fluid bg-gray-1">
      <div className="container pt-5 pb-5">
        <div className="row">
          <Carousel>
            {categoryRecipes !== null
              ? categoryRecipes.map((itemCategory, index) => (
                  <div key={index} className="col-sm">
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
    </div>
  );
};
