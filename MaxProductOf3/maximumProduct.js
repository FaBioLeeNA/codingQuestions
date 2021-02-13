const link = 'https://leetcode.com/problems/maximum-product-of-three-numbers/';
const level = 'easy';

// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: 6
// Example 2:

// Input: nums = [1,2,3,4]
// Output: 24
// Example 3:

// Input: nums = [-1,-2,-3]
// Output: -6

var maximumProduct = function(nums) {
  let max = -Infinity;
  let max2 = -Infinity;
  let max3 = -Infinity;
  let min = Infinity;
  let min2 = Infinity;
  
  for (let i = 0; i < nums.length; i++) {
      let n = nums[i];
      if (n <= min) {
          min2 = min;
          min = n;
      } else if (n <= min2) {
          min2 = n;
      }
      if (n >= max) {
          max3 = max2; 
          max2 = max;
          max = n;
      } else if (n >= max2) {
          max3 = max2;
          max2 = n;
      } else if (n >= max3) {
          max3 = n;
      }
  }
  return Math.max(min * min2 * max, max * max2 * max3);
};