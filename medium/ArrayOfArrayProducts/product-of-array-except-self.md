---
title: 'Product of Array Except Self'
link: 'https://leetcode.com/problems/product-of-array-except-self/'
---



<!-- ### Contents -->

<!-- * **[Prompt](#prompt)**
* **[Conceptual Overview](#conceptual-overview)**
* **[Examples](#examples)**
* **[Space and Time Complexity](#space-and-time-complexity)**
* **[Solution](#solution)** -->


### Prompt
Given an array of integers `arr`, you’re asked to calculate for each index `i` the product of all integers except the integer at that index (i.e. except `arr[i]`). Implement a function arrayOfArrayProducts that takes an array of integers and returns an array of the products.


### Examples

#### Input 1
`arr = [8, 10, 2]`
#### Output 1
`[20, 16, 80]`

#### Explanation
`by calculating: [10*2, 8*2, 8*10]`


#### Input 2
`arr = [2, 7, 3, 4]`
#### Output 2
`[84, 24, 56, 42]`
#### Explanation
`by calculating: [7*3*4, 2*3*4, 2*7*4, 2*7*3]`


### Constraints


`Solve without using division and analyze your solution’s time and space complexities.`


### Solution

```
function arrayOfArrayProducts(arr) {
  
  if (arr.length <= 1) {
    return [];
  }
  let answer = [1];
  let temp = 1;

  for (let i = 0; i < arr.length - 1; i++) {
    answer.push(answer[i] * arr[i]);
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    answer[i] = answer[i] * temp;
    temp *= arr[i];
  }

  return answer;
}
```
