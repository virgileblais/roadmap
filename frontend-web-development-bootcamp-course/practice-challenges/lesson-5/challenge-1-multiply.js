/*
CHALLENGE:
This code does not execute properly. Try to figure out why.

function multiply(a, b) {
  return a * b
}
*/

/*
ANSWER:
The code was missing 'console.log'.

function multiply(a, b) {
    console.log(a * b)
  }
//ANSWER is INCORRECT

/*
REVISED ANSWER:
I intially added 'console.log(a*b)' and this failed the Code Wars sample tests.
After further investigation, I learned that 'console.log()' and 'return' are different in that 'console.log()' simply prints the return value while 'return' actually returns the value thus allowing the sample tests to evaluate it.
Thus, the code was missing 'return'.

function multiply(a, b) {
    return a * b
  }
//REVISED ANSWER is CORRECT