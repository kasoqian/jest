export const getSort = (arr: any[]) => {
  return arr
    .sort((a, b) => a - b)
    .filter(v => typeof v !== "undefined");
};
