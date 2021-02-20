import { isEmpty } from "../../../utils";
import { Chef } from "../../Icons/Chef";

export const Ingredients = ({ recipe }) => {
  let rows = [];

  for (let i = 1; i < 20; i++) {
    const strMeasure = recipe?.[`strMeasure${i}`];
    const strIngredient = recipe?.[`strIngredient${i}`];

    if (!isEmpty(strMeasure) || !isEmpty(strIngredient)) {
      rows.push(
        <div key={i} className="col-6">
          <p>
            - {strMeasure} {strIngredient}
          </p>
        </div>
      );
    }
  }
  return (
    <>
      <div className="row mb-3">
        <h3 className="text-back-2">
          <Chef /> Ingredient
        </h3>
      </div>
      <div className="row">{rows}</div>
    </>
  );
};
