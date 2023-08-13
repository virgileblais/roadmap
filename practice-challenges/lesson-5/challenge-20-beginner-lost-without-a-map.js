/*
CHALLENGE:
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]
/*

/*
ANSWER:

*/

function maps(x) {
    return x.map(function(num) {
        return num * 2;
    });
  }

//ANSWER is CORRECT

/*
REVISED ANSWER:
In order to condense the code, I used an arrow function instead of a regular function.
*/

  function maps(x) {
    return x.map(num => num * 2);
  }