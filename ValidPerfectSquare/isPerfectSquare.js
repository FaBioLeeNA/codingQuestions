// Given a positive integer num, write a function which returns True if num is a perfect square else False.

// Follow up: Do not use any built-in library function such as sqrt.



// Example 1:

// Input: num = 16
// Output: true
// Example 2:

// Input: num = 14
// Output: false


var isPerfectSquare = function(num) {
  let n = 1;
  let sqr = 1;
  while (sqr <= num) {
      sqr = n**2;
      if (sqr === num) {
          return true;
      }
      n++;
  }
  return false;
};