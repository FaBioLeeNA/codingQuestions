---
title: 'Validate Perfect Square'
link: 'https://leetcode.com/problems/valid-perfect-square/'
---



<!-- ### Contents -->

<!-- * **[Prompt](#prompt)**
* **[Conceptual Overview](#conceptual-overview)**
* **[Examples](#examples)**
* **[Space and Time Complexity](#space-and-time-complexity)**
* **[Solution](#solution)** -->


### Prompt
Given a positive integer num, write a function which returns True if num is a perfect square else False.

Follow up: Do not use any built-in library function such as sqrt.


### Examples

#### Input 1
`num = 16`
#### Output 1
`true`


#### Input 2
`num = 14`
#### Output 2
`false`


### Constraints
`1 <= num <= 2^31 - 1`

### Solution

```
var isPerfectSquare = function(num) {
  let n = 1;
  let sqr = 1;
  while (sqr <= num) {
      sqr = n**2;
      if (sqr === num) {
          return true;
      }
      n++;
  }
  return false;
};
```
