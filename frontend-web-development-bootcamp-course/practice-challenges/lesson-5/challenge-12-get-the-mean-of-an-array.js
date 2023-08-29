/*
CHALLENGE:
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.
*/

/*
ANSWER:

function getAverage(marks){
    let summedMarks = 0;
    for (i = 0; i < marks.length; i++) {
      summedMarks += marks[i]
    }
    let average = summedMarks / i;
    return Math.round(average);
  }
*/

//ANSWER is technically CORRECT

/*
REVISED ANSWER:
The prior answer did indeed pass all of the codewars sample tests.
However, I realized that the function did not truly adhere to the instructions as it did not always round down, but instead rounded to the nearest integer.
I revised the function by replacing 'Math.round' with 'Math.floor', adhering to the instructions.
*/

function getAverage(marks){
    let summedMarks = 0;
    for (i = 0; i < marks.length; i++) {
      summedMarks += marks[i]
    }
    let average = summedMarks / i;
    return Math.floor(average);
  }

//REVISED ANSWER is CORRECT