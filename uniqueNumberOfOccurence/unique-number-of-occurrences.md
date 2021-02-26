---
title: 'Unique Number of Occurrences'
link: 'https://leetcode.com/problems/unique-number-of-occurrences/'
---



<!-- ### Contents -->

<!-- * **[Prompt](#prompt)**
* **[Conceptual Overview](#conceptual-overview)**
* **[Examples](#examples)**
* **[Space and Time Complexity](#space-and-time-complexity)**
* **[Solution](#solution)** -->


### Prompt
Given an array of integers `arr`, write a function that returns `true` if and only if the number of occurrences of each value in the array is unique.



### Examples

#### Input 1
`arr = [1,2,2,1,1,3]`
#### Output 1
`true`

#### Explanation
```
The value 1 has 3 occurrences, 2 has 2 and 3 has 1. 
// No two values have the same number of occurrences.
```


#### Input 2
`arr = [1,2]`
#### Output 2
`false`

#### Input 3
`arr = [-3,0,1,-3,1,1,1,-3,10,0]`
#### Output 3
`true`


### Constraints


* `1 <= arr.length <= 1000`
* `-1000 <= arr[i] <= 1000`

### Solution

```
var uniqueOccurrences = function(arr) {
  let occurence = {};
  let uniqueOcc = {};

  for (let num of arr) {
      occurence[num] ? occurence[num]++ : occurence[num] = 1
  }
  for (let key in occurence) {
      if (uniqueOcc[occurence[key]] === undefined) {
          uniqueOcc[occurence[key]] = 1;
      } else {
          return false;
      }
  }
  return true;
};
```
