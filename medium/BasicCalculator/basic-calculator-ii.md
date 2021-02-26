---
title: 'Basic Calculator II'
link: 'https://leetcode.com/problems/basic-calculator-ii/'
---



<!-- ### Contents -->

<!-- * **[Prompt](#prompt)**
* **[Conceptual Overview](#conceptual-overview)**
* **[Examples](#examples)**
* **[Space and Time Complexity](#space-and-time-complexity)**
* **[Solution](#solution)** -->


### Prompt
Given a string `s` which represents an expression, evaluate this expression and return its `value`. 

The integer division should truncate toward zero.



### Examples

#### Input 1
`s = "3+2*2"`
#### Output 1
`7`

#### Input 2
`s = " 3/2 "`
#### Output 2
`1`

#### Input 3
`s = " 3+5 / 2 "`
#### Output 3
`5`


### Constraints

* `1 <= s.length <= 3 * 105`
* `s consists of integers and operators ('+', '-', '*', '/') separated by some number of spaces.`
* `s represents a valid expression.`
* `All the integers in the expression are non-negative integers in the range [0, 231 - 1].`
* `The answer is guaranteed to fit in a 32-bit integer.`


### Solution

```
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
```
