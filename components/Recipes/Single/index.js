import { Details } from "./details";
import { Ingredients } from "./ingredients";
import { Image } from "./styles";

export const Single = ({ recipe }) => {
  return (
    <div className="container pt-5 pb-5">
      <div className="row">
        <h3 className="text-back-2">
          <a href="/" className="text-back-2">
            Home
          </a>{" "}
          / {recipe?.strMeal}
        </h3>
        <div className="col-12 mt-5">
          <div className="row bg-white">
            <div className="col-6">
              <Image>
                <img src={recipe?.strMealThumb} />
              </Image>
            </div>

            <div className="col-6 pt-4">
              <Details recipe={recipe} />
              <Ingredients recipe={recipe} />
            </div>
          </div>
          <div className="row bg-white">
            <div className="col-12 p-5 ">
              <p className="lead fw-lighter">{recipe?.strInstructions}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
