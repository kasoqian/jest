import { getSort } from "./index";

it("数组顺序排列", () => {
  expect(getSort([1, 9, 5, 3])).toStrictEqual([1, 3, 5, 9]);
});

it("空值去除", () => {
  expect(getSort([1, 9, 5, , 3])).toEqual([1, 3, 5, 9]);
});
