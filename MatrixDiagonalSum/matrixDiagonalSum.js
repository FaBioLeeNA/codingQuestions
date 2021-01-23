// Given a square matrix mat, return the sum of the matrix diagonals.

// Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

// Example 2:

// Input: mat = [[1,1,1,1],
//               [1,1,1,1],
//               [1,1,1,1],
//               [1,1,1,1]]
// Output: 8
// Example 3:

// Input: mat = [[5]]
// Output: 5

var diagonalSum = function(mat) {
  let answer = 0;
  let j = mat.length - 1;
  for (let i = 0; i < mat.length; i++) {
      answer += mat[i][i];
      if (i !== j) {
          answer += mat[i][j];
      }
      j--;
  }
  return answer;
};