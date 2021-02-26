---
title: 'Trapping Rain Water'
link: 'https://leetcode.com/problems/trapping-rain-water/'
---



<!-- ### Contents -->

<!-- * **[Prompt](#prompt)**
* **[Conceptual Overview](#conceptual-overview)**
* **[Examples](#examples)**
* **[Space and Time Complexity](#space-and-time-complexity)**
* **[Solution](#solution)** -->


### Prompt
Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it can trap after raining.



### Examples

#### Input 1
`height = [0,1,0,2,1,0,1,3,2,1,2,1]`
#### Output 1
`6`

#### Explanation
```
between height[1](1) and height[3](2) there is 0 elevation, so there is 1 block of water trapped.
between height[3](2) and height[8](3) there are 4 block of water trapped.
between height[9](2) and height[11](2) there is 1 eleveation, making only 1 block of water trapped.
```


#### Input 2
`height = [4,2,0,3,2,5]`
#### Output 2
`9`


### Constraints

* `n == height.length`
* `0 <= n <= 3 * 10^4`
* `0 <= height[i] <= 10^5`


### Solution

#### 2 arrays

```
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
```

#### 2 pointers 

```
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
```