import { useEffect, useState } from "react";
import api from "../../services/api";
import { getIdRecipe } from "../../utils";

import { Container } from "../../components/Base/Container";
import { NavBar } from "../../components/Header/NavBar";
import { Single } from "../../components/Recipes/Single";

const Recipes = ({ slug }) => {
  const [detailsRecipe, setDetailsRecipe] = useState({});

  useEffect(() => {
    const load = async () => {
      const recipeId = parseInt(getIdRecipe(slug));

      if (Number.isInteger(recipeId)) {
        const res = await api.post("recipe-by-id", {
          id: recipeId,
        });
        setDetailsRecipe(res.data);
      }
    };

    load();
  }, []);

  return (
    <>
      <NavBar />
      <Container>
        <Single recipe={detailsRecipe} />
      </Container>
    </>
  );
};

Recipes.getInitialProps = ({ query: { slug } }) => {
  return { slug };
};

export default Recipes;
