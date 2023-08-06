/*
CHALLENGE:
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function makeNegative(num) {
  // Code?
}
*/

/*
ANSWER:


function makeNegative(num) {
    (-(num));
  } 
*/

//ANSWER is INCORRECT

/*
REVISED ANSWER:
The function failed to pass the Code Wars test as it was not returning a value to evaluate via the test. I thus added a 'return' statement.

function makeNegative(num) {
    return (-(num));
  }
*/

//ANSWER is INCORRECT

/*
REVISED ANSWER 2:
Prior code passed Code Wars test but not the attempt evaluation.
I realized that I had partially misunderstood that the question requested for negative inputs to remain negative, however I had previously interpreted that as a request for negative inputs to be made positive.
*/

function makeNegative(num) {
    return -Math.abs(num);
  }

//ANSWER is INCORRECT