import { expect, test } from "vitest";

let sampleInput0 = [1, 4, 3, 2];
let sampleOutput0 = [2, 3, 4, 1];
test("sample input 0", () => {
  expect(reverseArray(sampleInput0)).toEqual(sampleOutput0);
});
