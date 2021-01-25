// Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

// Each letter in the magazine string can only be used once in your ransom note.



// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

var canConstruct = function(ransomNote, magazine) {
  let mag = magazine.split('');

  for (let i = 0; i < ransomNote.length; i++) {
      let index = mag.indexOf(ransomNote[i]);
      if (index === -1) {
          return false
      } else {
          mag.splice(index, 1);
      }
  }
  return true;
};