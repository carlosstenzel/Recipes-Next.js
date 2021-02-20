const initialState = {
  recipes: null,
};

const reducerRecipes = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_RECIPES_HOME":
      return {
        recipes: action.recipes,
      };

    default:
      return state;
  }
};

export default reducerRecipes;
