// For a non-negative integer X, the array-form of X is an array of its digits in left to right order.  For example, if X = 1231, then the array form is [1,2,3,1].

// Given the array-form A of a non-negative integer X, return the array-form of the integer X+K.

 

// Example 1:

// Input: A = [1,2,0,0], K = 34
// Output: [1,2,3,4]
// Explanation: 1200 + 34 = 1234
// Example 2:

// Input: A = [2,7,4], K = 181
// Output: [4,5,5]
// Explanation: 274 + 181 = 455
// Example 3:

// Input: A = [2,1,5], K = 806
// Output: [1,0,2,1]
// Explanation: 215 + 806 = 1021
// Example 4:

// Input: A = [9,9,9,9,9,9,9,9,9,9], K = 1
// Output: [1,0,0,0,0,0,0,0,0,0,0]
// Explanation: 9999999999 + 1 = 10000000000

var addToArrayForm = function(A, K) {
  let num = K;
  let index = A.length - 1;
  let extra = false;
  while (num !== 0 || extra) {
      let digit = num % 10;
      if (extra) {
          digit++;
      }
      if (index < 0) {
          A.unshift(digit);
          index = 0;
      } else {
          A[index] += digit;  
      }
      if (A[index] > 9) {
          extra = true;
          A[index] = A[index] % 10
      } else {
          extra = false;
      }
      num = Math.floor(num/10);
      index--;
  }
  return A;
};
