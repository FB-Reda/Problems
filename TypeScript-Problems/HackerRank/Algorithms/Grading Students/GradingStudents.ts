/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

export function gradingStudents(grades: number[]): number[] {
  // Write your code here
  let roundedGrades: number[] = [];

  grades.forEach((grade) => {
    grade < 38 || grade % 5 < 3
      ? roundedGrades.push(grade) //
      : roundedGrades.push(Math.ceil(grade / 5) * 5);
  });

  return roundedGrades;
}

//grades fall between 0 - 100
// grades less than 40 are failing

//If the difference between the grade and the next multiple of 5 is less than 3 round grade up to next multiple of 5
//if grade is less than 38 no rounding occurs
