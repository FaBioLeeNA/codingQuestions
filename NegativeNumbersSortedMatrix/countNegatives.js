// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.



// Example 1:

// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.
// Example 2:

// Input: grid = [[3,2],[1,0]]
// Output: 0
// Example 3:

// Input: grid = [[1,-1],[-1,-1]]
// Output: 3
// Example 4:

// Input: grid = [[-1]]
// Output: 1

var countNegatives = function(grid) {
  let answer = 0;
  let rowSize = grid[0].length;
  let counter = 0;

  while (grid[0][counter] >= 0) {
      counter++;
  }

  answer += rowSize - counter;
  if (answer === 0) {
      counter--;
  }
  for (let i = 1; i < grid.length; i++) {
      while (grid[i][counter] < 0) {
          counter--;
      }
      answer += rowSize - counter - 1;
  }

  if (answer < 0) {
      return 0;
  }
  return answer;
};

// let test = countNegatives([[5,1,0],[-5,-5,-5]]);

// console.log(test);