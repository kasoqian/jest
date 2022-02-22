import { getSort } from ".";

it("数组顺序排列", () => {
  expect(getSort([1, 9, 5, 3])).toStrictEqual([1, 3, 5, 9]);
});

it("空值去除", () => {
  expect(getSort([0, 9, 5, , , , 3])).toEqual([0, 3, 5, 9]);
});

var a;
var b;
var c;
