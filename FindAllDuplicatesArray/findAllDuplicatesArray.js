const link = 'https://leetcode.com/problems/find-all-duplicates-in-an-array/'
const level = 'medium'

// Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

// Find all the elements that appear twice in this array.

// Could you do it without extra space and in O(n) runtime?

// Example:
// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [2,3]

var findDuplicates = function(nums) {
  let answer = [];
  let seen = new Array(nums.length).fill(0);
  
  for (let num of nums) {
      seen[num - 1]++;
  }
  
  for (let i = 0; i < nums.length; i++) {
      if (seen[i] > 1) {
          answer.push(i + 1);
      }
  }
  return answer;
};