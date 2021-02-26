const link = 'https://leetcode.com/problems/trapping-rain-water/'
const level = 'hard'

// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

 

// Example 1:


// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9

// 2 array solution

var trap = function(height) {
  let left = [height[0]];
  let right = new Array(height.length).fill(null);
  right[height.length - 1] = height[height.length - 1];
  
  let answer = 0;
  
  for (let i = 1; i < height.length; i++) {
      left.push(Math.max(left[i-1], height[i]))
  }
  for (let i = height.length - 2; i >= 0; i--) {
      right[i] = (Math.max(right[i + 1], height[i]))
  }
  
  for (let i = 0; i < height.length; i++) {
      let waterTrapped = Math.min(right[i], left[i]) - height[i];
      if (waterTrapped > 0) {
          answer += waterTrapped
      }
  }
  return answer;
};

// 2 pointers solution
var trap = function(height) {
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let answer = 0;
  
  while (left < right) {
      if (height[left] < height[right]) {
          height[left] >= leftMax ? (leftMax = height[left]) : answer += (leftMax - height[left]);
          left++;
      } else {
          height[right] >= rightMax ? (rightMax = height[right]) : answer += (rightMax - height[right]);
          right--;
      }
  }
  return answer;
};