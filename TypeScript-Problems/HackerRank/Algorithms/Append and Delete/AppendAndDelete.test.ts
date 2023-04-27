import { expect, test } from "vitest";
import { appendAndDelete } from "./AppendAndDelete";

test("hackerhappy -> hackerrank", () => {
  expect(appendAndDelete("hackerhappy", "hackerrank", 9)).toEqual("Yes");
});

test("aba -> aba", () => {
  expect(appendAndDelete("aba", "aba", 7)).toEqual("Yes");
});

test("aaa -> a", () => {
  expect(appendAndDelete("aaa", "a", 5)).toEqual("Yes");
});

test("ashley -> ash", () => {
  expect(appendAndDelete("ashley", "ash", 2)).toEqual("No");
});
