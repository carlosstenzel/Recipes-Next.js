import { LabelDetails } from "./styles";

export const Details = ({ recipe }) => (
  <div className="row mb-5">
    <div className="col-6">
      <LabelDetails>
        <h4 className="text-back-2">Category: {recipe.strCategory}</h4>
      </LabelDetails>
    </div>
    <div className="col-6">
      <LabelDetails>
        <h4 className="text-back-2">Area: {recipe.strArea}</h4>
      </LabelDetails>
    </div>
  </div>
);
