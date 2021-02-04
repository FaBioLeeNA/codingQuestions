// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.



// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

var merge = function(intervals) {
  let i = 0;
  intervals.sort((a, b) => (a[0] - b[0]))
  while (i < intervals.length - 1) {
      let lower = intervals[i][0];
      let upper = intervals[i][1];
      let merged = false;
      if (intervals[i+1][0] <= upper) {
          if (intervals[i+1][1] >= upper) {
          upper = intervals[i+1][1];
          }
          merged = true;
      }
      if (intervals[i+1][0] <= lower) {
          lower = intervals[i+1][0];
          merged = true;
      }
      if (merged) {
          intervals.splice(i, 2, [lower, upper])
      } else {
          i++;
      }
  }
  return intervals;
};