import { expect, test } from "vitest";
import { gradingStudents } from "./GradingStudents";

test("grade = 84", () => {
  expect(gradingStudents([84])).toEqual([85]);
});

test("grade = 29", () => {
  expect(gradingStudents([29])).toEqual([29]);
});

test("grade = 57", () => {
  expect(gradingStudents([57])).toEqual([57]);
});

let sampleInput0 = [73, 67, 38, 33];
let sampleOutput0 = [75, 67, 40, 33];
test("sample input 0", () => {
  expect(gradingStudents(sampleInput0)).toEqual(sampleOutput0);
});
