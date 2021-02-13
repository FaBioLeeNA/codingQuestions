const link = 'https://leetcode.com/problems/maximum-number-of-balloons/';
const level = 'easy'

// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return the maximum number of instances that can be formed.

 

// Example 1:



// Input: text = "nlaebolko"
// Output: 1
// Example 2:



// Input: text = "loonbalxballpoon"
// Output: 2
// Example 3:

// Input: text = "leetcode"
// Output: 0

var maxNumberOfBalloons = function(text) {
  let obj = {
      b: 0,
      a: 0,
      l: 0,
      o: 0,
      n: 0
  };
  for (let letter of text) {
      if (obj[letter] !== undefined) obj[letter]++;
  }
  let array = [];
  for (let key in obj) {
      array.push(obj[key])
  }
  array[2] = Math.floor(array[2]/2)
  array[3] = Math.floor(array[3]/2)
  return Math.min(...array);
};