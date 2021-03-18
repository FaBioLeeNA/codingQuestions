---
title: 'Pyramid Descent Puzzle'
link: 'no link'
---

### Prompt

A Pyramid Descent Puzzle consists of a pyramid of `positive integers`. To solve the puzzle, you must find a path that traverses the pyramid from top to bottom visiting `numbers whose product is a given target value`.
Each step in the path must go down one row, and go either one step to the left or one step to the right.

### Examples

#### Input 1
`pyramid = [[1], [2, 3], [4, 1, 1]], target = 2`
```
 1
 2 3
4 1 1
```
#### Output 1
`LR`

#### Explanation
```
A solver for this puzzle should output LR, indicating that the correct path starts
from the 1 on top, goes Left to the 2 on the second row, then goes Right to the 1 
in the center of the bottom row.

This gives the following path:

    1
   / 
  2   3
   \
4   1   1

1 * 2 = 2
2 * 1 = 1
```

#### Input 2
`pyramid = [[2], [4, 3], [3, 2, 6], [2, 9, 5, 2], [10, 5, 2, 15, 5]], target = 720`
```
    2
    4 3 
   3 2 6
  2 9 5 2
10 5 2 15 5
```
#### Output 2
`LRLL`

#### Explanation
```
The path is:

         2
        / 
       4   3
        \
     3   2   6
        /
   2   9   5   2
      /
10   5   2   15   5

2 * 4 = 8
8 * 2 = 16
16 * 9 = 144
144 * 5 = 720
```

#### Solution

```
const pyramidDescentPuzzle = (pyramid, target) => {
  let answer = 'no possible solution';
  let maxLevel = pyramid.length - 1;
  
  const traverse = (directions, level, index, product) => {
    if (level == maxLevel && product == target) return answer = directions;
    
    if (level == maxLevel) return;


    let leftProduct = product * pyramid[level + 1][index];
    let rightProduct = product * pyramid[level + 1][index + 1];
    if (target % leftProduct == 0) {
      traverse(directions + 'L', level + 1, index, leftProduct);
    }
    if (target % rightProduct == 0) {
      traverse(directions + 'R', level + 1, index + 1, rightProduct);
    }
  }
  
  traverse('', 0, 0, pyramid[0][0]);
  return answer;
}
```