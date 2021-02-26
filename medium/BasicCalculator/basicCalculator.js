const link = 'https://leetcode.com/problems/basic-calculator-ii/'
const level = 'medium'

// Given a string s which represents an expression, evaluate this expression and return its value.

// The integer division should truncate toward zero.



// Example 1:

// Input: s = "3+2*2"
// Output: 7
// Example 2:

// Input: s = " 3/2 "
// Output: 1
// Example 3:

// Input: s = " 3+5 / 2 "
// Output: 5

var calculate = function(s) {
  let currNumb = 0;
  let operation = '+'
  let numArray = [];
  for (let i = 0; i < s.length + 1; i++) {
      let currChar = s[i];

      if (currChar !== ' ') {
          if (!isNaN(currChar)) {
              currNumb = (currNumb  * 10) + +currChar;
          } else {
              if (operation == '+') {
                  numArray.push(currNumb);
              } else if (operation == '-') {
                  numArray.push(-currNumb);
              } else if (operation == '*') {
                  let prevNumb = numArray.pop();
                  numArray.push(prevNumb * currNumb);
              } else if (operation == '/') {
                  let prevNumb = numArray.pop();
                  if (prevNumb < 0) {
                      numArray.push(Math.ceil(prevNumb / currNumb));
                  } else {
                      numArray.push(Math.floor(prevNumb / currNumb));
                  }
              }
              operation = currChar;
              currNumb = 0;
          }
      }
  }
  let answer = numArray.reduce((a, b) => (a + b));
  return answer;
};
