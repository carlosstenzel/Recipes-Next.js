const isEmpty = (str) => {
  let formatStrig = String(str);
  formatStrig = formatStrig.replace(/\s/g, "");
  return formatStrig.length === 0 ? true : false;
};

export default isEmpty;
