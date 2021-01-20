// Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Example 1:
// Input: "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Note: In the string, each word is separated by single space and there will not be any extra space in the string.

var reverseWords = function(s) {
  let arr = s.split(' ');
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
      let word = '';
      let l = arr[i].length - 1;
      for (let j = l; j >= 0; j--) {
          word += arr[i][j];
      }
      answer.push(word);
  }
  return answer.join(' ');
};