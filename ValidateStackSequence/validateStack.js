const link = 'https://leetcode.com/problems/validate-stack-sequences/';
const level = 'medium'

// Given two sequences pushed and popped with distinct values, return true if and only if this could have been the result of a sequence of push and pop operations on an initially empty stack.

 

// Example 1:

// Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
// Output: true
// Explanation: We might do the following sequence:
// push(1), push(2), push(3), push(4), pop() -> 4,
// push(5), pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
// Example 2:

// Input: pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
// Output: false
// Explanation: 1 cannot be popped before 2.

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