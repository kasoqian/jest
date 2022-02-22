export const getSort = (arr: any[]) => {
  return arr
    .sort((a, b) => a - b)
    .filter(v => typeof v !== "undefined");
};

console.log(getSort([0, 9, 5, , , , 3]));
