---
title: 'Container with Most Water'
link: 'https://leetcode.com/problems/container-with-most-water/'
---


### Prompt
Given `n` non-negative integers `a1, a2, ..., an` , where each represents a point at coordinate `(i, ai)`. `n` vertical lines are drawn such that the two endpoints of the line `i` is at `(i, ai)` and `(i, 0)`. Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

Notice that you may not slant the container.
 

### Examples

#### Input 1
`height = [1,8,6,2,5,4,8,3,7]`

#### Output 1
`49`

#### Explanation 1
```
If we take height[1] (8) and height[8] (7), we will choose the lower height (7) and
the width would be 8 - 1 = 7. 
7 * 7 = 49
```

#### Input 2
`height = [4,3,2,1,4]`
#### Output 2
`16`

#### Explanation 2
```
If we take height[0] (4) and height[4] (4), we will choose the lower height (4) and
the width would be 4 - 0 = 4. 
4 * 4 = 16
```

### Constrains

* `n == height.length`
* `2 <= n <= 10^5`
* `0 <= height[i] <= 10^4`
 
### Solution

```
var maxArea = function(height) {
  let left = 0;
  let right = height.length - 1;
  let h = Math.min(height[left], height[right]);
  let b = right - left;
  let area = h * b;
  
  while (left < right) {
      if (height[left] < height[right]) {
          left++
      } else {
          right--
      }
      h = Math.min(height[left], height[right]);
      b = right - left;
      
      area = Math.max(area, h * b);
  }
  return area;
};
```
