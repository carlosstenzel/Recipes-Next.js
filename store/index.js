import { useMemo } from "react";
import { initializeStore } from "./initializeStore";

const initialState = {
  recipes: null,
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
