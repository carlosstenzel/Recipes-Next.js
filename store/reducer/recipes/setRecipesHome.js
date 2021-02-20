import { useDispatch } from "react-redux";

const setRecipesHomes = (recipes) => {
  const dispatch = useDispatch();

  dispatch({
    type: "SHOW_RECIPES_HOME",
    recipes: recipes,
  });
};

export default setRecipesHomes;
