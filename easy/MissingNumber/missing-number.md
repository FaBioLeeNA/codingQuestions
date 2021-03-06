---
title: 'Missing Number'
link: 'https://leetcode.com/problems/missing-number/'
---


### Prompt
Given an array `nums` containing `n` distinct numbers in the range `[0, n]`, return the only number in the range that is missing from the array.

Could you implement a solution using only `O(1)` extra space complexity and `O(n)` runtime complexity?

### Examples

#### Input 1
`nums = [3,0,1]`
#### Output 1
`2`

#### Explanation
```
n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 
2 is the missing number in the range since it does not appear in nums.
```


#### Input 2
`num = [0,1]`
#### Output 2
`2`
#### Explanation
```
n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 
2 is the missing number in the range since it does not appear in nums.
```

#### Input 3
`nums = [9,6,4,2,3,5,7,0,1]`
#### Output 3
`8`
#### Explanation
```
n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 
8 is the missing number in the range since it does not appear in nums.
```

### Constraints

* `n == nums.length`
* `1 <= n <= 10^4`
* `0 <= nums[i] <= n`
* `All the numbers of nums are unique.`


### Solution

```
var missingNumber = function(nums) {
  let rangeSum = (nums.length + 1) * (nums.length / 2);
  let sum = nums.reduce((a,b) => (a+b));
  
  if (sum == rangeSum) {
      return 0
  } else {
      return rangeSum - sum;
  }
};
```
