// Given a binary tree, return all root-to-leaf paths.

// Note: A leaf is a node with no children.

// Example:

// Input:

//    1
//  /   \
// 2     3
//  \
//   5

// Output: ["1->2->5", "1->3"]

// Explanation: All root-to-leaf paths are: 1->2->5, 1->3

var binaryTreePaths = function(root) {
  if (root === null) {
      return [];
  }
  let answer = [];
  const traverse = (root, str, first = false) => {
      let newStr;
      if (first) {
          newStr = `${root.val}`
      } else {
          newStr = str.concat(`->${root.val}`);
      }
      if (root.left === null && root.right === null) {
          answer.push(newStr);
      }
      if (root.left !== null) {
          traverse(root.left, newStr);
      }
      if (root.right !== null) {
          traverse(root.right, newStr);
      }
  }
  traverse(root, '', true);
  return answer;
};