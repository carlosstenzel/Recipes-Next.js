import { useCallback } from "react";
import _ from "lodash";
import api from "../../../services/api";
import { useDispatch } from "react-redux";

import { IconSearch } from "../../Icons/Search";
import { Content } from "./styles";

export const Search = () => {
  const dispatch = useDispatch();

  const delayedQuery = useCallback(
    _.debounce((fn, q) => fn(q), 300),
    []
  );

  const searchByName = (name) => {
    delayedQuery(async (name) => {
      const res = await api.post("recipe-search-name", {
        name: name,
      });
      let dataRecipe = res.data.length > 0 ? res.data : [];

      dispatch({
        type: "SHOW_RECIPES_HOME",
        recipes: dataRecipe,
      });
    }, name);
  };

  return (
    <Content>
      <>
        <IconSearch />
        <input
          type="text"
          placeholder="Search a recipe ... "
          onChange={(e) => searchByName(e.target.value)}
        />
      </>
    </Content>
  );
};
