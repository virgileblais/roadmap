/*
CHALLENGE:

Introduction
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20

ANSWER ATTEMPT 1:

function century(year) {
    let yearString = String(year);
    if (yearString.slice(2,4) == '00') {
      let yearStringSlice = yearString.slice(0,2);
      return Number(yearStringSlice);
    }
    if (year <= 100) {
      return 1;
    } else {
      let yearStringSlice = yearString.slice(0,2);
      return Number(yearStringSlice) + 1;
      }
  }
*/

//ANSWER is partially CORRECT

/*
ANSWER ATTEMPT 2:
The prior answer passes the codewars sample tests, except for tests with input years greater than 9999.
I thought of converting the input year (e.g. 10008) into an array of strings (e.g. ['1', '0', '0', '0', '8']).
Next creating a loop that would return all but the last 2 indices of the year array (e.g. ['1', '0', '0']).
The resulting array would be joined then converted back into a number (e.g. 100) and then 1 would be added to it (e.g. 101).
The resulting number would be returned as the century.


Notes:
a century is a period of time equal to 100 years.
the 1st century started in the year 1 and ended in the year 100.

Examples to think through:
1-100 = 1
101-200 = 2
1001-1100 = 11
9001-9100 = 91
10001-10100 = 101


Pseudocode:
if yearArr.length = 3
    return year[1]
if yearArr.length = 4
    return year[1] + year[2]
if yearArr.length = 5
    return year[1] + year[2] + year[3]
if yearArr.length = x
    return year[1] + year[2] + year[3] + year[yearArr.length - 2]


function century(year) {
    let yearArr = String(year).split('');
    let century = [];
    for (i = 0; i < (yearArr.length - 2); i++) {
        century.push(yearArr[i]);
    }
    return Number(century.join('')) + 1;
}
*/

//ANSWER ATTEMPT 2 is partially CORRECT

/*
ANSWER ATTEMPT 3:
The prior answer does now succesfully pass the tests with input years greater than 9999,
However, it does not pass the tests with input years ending in 00 (e.g. 2000) as it returns 21 instead of 20.
In order to solve these tests, I added an if statement to check if the last 2 indices of the year array are equal to '00',
and if so, return the century without adding 1 to it.

*/

function century(year) {
  let yearArr = String(year).split('');
  let century = [];
  for (i = 0; i < (yearArr.length - 2); i++) {
    century.push(yearArr[i]);
  }
  if (yearArr.slice(-2).join('') == '00') {
    return Number(century.join(''));
  } else {
    return Number(century.join('')) + 1;
  }
}

//ANSWER ATTEMPT 3 is CORRECT

/*
REVISED ANSWER:
Upon revision of peer answers on codewars, I saw the top ranked answer was funnily much simpler answer than mine.
In retrospect, when I was thought of creating the loop that would return all but the last 2 indices of the year array,
I should have realized why I was avoiding the last 2 indices of the year array,
because a century is a unit equal to 100 years thus dividing an input year by 100 would return the century.
Finally I would just need to round up to the nearest century.

const century = year => Math.ceil(year/100)

Breakdown:
year/100
How many one hundred year periods fit into a given input year.

Math.ceil(dividedYear)
Rounds up to the nearest century, thus 2001 -> 20.1 -> 21 centuries.
*/