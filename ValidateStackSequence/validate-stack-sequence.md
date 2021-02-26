---
title: 'Validate Stack Sequence'
link: 'https://leetcode.com/problems/validate-stack-sequences/'
---



<!-- ### Contents -->

<!-- * **[Prompt](#prompt)**
* **[Conceptual Overview](#conceptual-overview)**
* **[Examples](#examples)**
* **[Space and Time Complexity](#space-and-time-complexity)**
* **[Solution](#solution)** -->


### Prompt
Given two sequences `pushed` and `popped` with **distinct values**, return `true` if and only if this could have been the result of a sequence of push and pop operations on an initially empty stack.


### Examples

#### Input 1
`pushed = [1,2,3,4,5], popped = [4,5,3,2,1]`
#### Output 1
`true`

#### Explanation
```
We might do the following sequence:
// push(1), push(2), push(3), push(4), pop() -> 4,
// push(5), pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
```


#### Input 2
`pushed = [1,2,3,4,5], popped = [4,3,5,1,2]`
#### Output 2
`false`
#### Explanation
`1 cannot be popped before 2.`


### Constraints


* `0 <= pushed.length == popped.length <= 1000`
* `0 <= pushed[i], popped[i] < 1000`
* `pushed is a permutation of popped.`
* `pushed and popped have distinct values.`


### Solution

```
var validateStackSequences = function(pushed, popped) {
  if (pushed.length === 0) {
      return true;
  }
  let array = [];
  let pushedIndex = 0
  let poppedIndex = 0;
  while (true) {
      if (array[array.length - 1] == popped[poppedIndex]) {
          array.pop();
          poppedIndex++;
      } else {
          array.push(pushed[pushedIndex++]);
      }
      if (pushedIndex > pushed.length && popped.length !== [poppedIndex]) {
          return false;
      } else if (pushedIndex == pushed.length && poppedIndex == popped.length) {
          return true;
      }
  }
};
```
