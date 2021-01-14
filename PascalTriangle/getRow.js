// Given an integer rowIndex, return the rowIndexth row of the Pascal's triangle.

// Notice that the row index starts from 0.

// In Pascal's triangle, each number is the sum of the two numbers directly above it.

var getRow = function(rowIndex) {
  if (rowIndex === 0) {
      return [1];
  } else if (rowIndex === 1) {
      return [1, 1]
  }

  let prev = getRow(rowIndex - 1);
  let answer = [1];
  for (var i = 1; i < rowIndex; i++) {
      answer.push(prev[i-1] + prev[i]);
  }
  answer.push(1);
  return answer;
};