const getIdRecipe = (url) => {
  const convertString = String(url);
  return convertString.replace(/[A-Za-z_-]/g, "");
};

export default getIdRecipe;
