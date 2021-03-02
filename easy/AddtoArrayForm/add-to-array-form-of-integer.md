---
title: 'Add to Array-Form of Integer'
link: 'https://leetcode.com/problems/add-to-array-form-of-integer/'
---


### Prompt
For a non-negative integer `X`, the array-form of `X` is an array of its digits in left to right order.  For example, if `X = 1231`, then the array form is `[1,2,3,1]`.

Given the array-form `A` of a non-negative integer `X`, return the array-form of the integer `X+K`.



### Examples

#### Input 1
`A = [1,2,0,0], K = 34`
#### Output 1
`[1,2,3,4]`

#### Explanation
`1200 + 34 = 1234`


#### Input 2
`A = [2,7,4], K = 181`
#### Output 2
`[4,5,5]`
#### Explanation
`274 + 181 = 455`

#### Input 3
`A = [9,9,9,9,9,9,9,9,9,9], K = 1`
#### Output 3
`[1,0,0,0,0,0,0,0,0,0,0]`
#### Explanation
`9999999999 + 1 = 10000000000`



### Constraints

* `1 <= A.length <= 10000`
* `0 <= A[i] <= 9`
* `0 <= K <= 10000`
* `If A.length > 1, then A[0] != 0`


### Solution

```
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

```
