import { add } from "./main";
describe(add, () => {
  test("add function", () => {
    expect(add(1, 1)).toBe(2);
  });

  test("add function2", () => {
    expect(add(5, 4)).toBe(9);
  });
});
