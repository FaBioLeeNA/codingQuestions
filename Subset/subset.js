
// Given an integer array nums of unique elements, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.



// Example 1:

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]

var subsets = function(nums) {
  let answer = [[]];
  for (let i = 0; i < nums.length; i++) {
      let limit = answer.length;
      for (let j = 0; j < limit; j++) {
          answer.push([...answer[j], nums[i]])
      }
  }
  return answer;
};