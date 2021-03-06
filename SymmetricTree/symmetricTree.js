// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3


// But the following [1,2,2,null,3,null,3] is not:

//     1
//    / \
//   2   2
//    \   \
//    3    3

const compare = (left, right) => {
  if (left == null && right == null) {
      return true;
  } else if (left == null || right == null) {
      return false;
  }
  return (left.val == right.val) && compare(left.left, right.right) && compare(left.right, right.left);
}

var isSymmetric = function(root) {
  return compare(root, root)
};

