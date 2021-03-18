const pyramidDescentPuzzle = (pyramid, target) => {
  let answer = 'no possible solution';
  let maxLevel = pyramid.length - 1;
  console.log(maxLevel);
  if (maxLevel < 1) {
    return 'pyramid should have at least 2 levels'
  }
  
  const traverse = (directions, level, index, product) => {
    if (level == maxLevel && product == target) return answer = directions;
    
    if (level == maxLevel) return;


    let leftProduct = product * pyramid[level + 1][index];
    let rightProduct = product * pyramid[level + 1][index + 1];
    if (target % leftProduct == 0) {
      traverse(directions + 'L', level + 1, index, leftProduct);
    }
    if (target % rightProduct == 0) {
      traverse(directions + 'R', level + 1, index + 1, rightProduct);
    }
  }
  
  traverse('', 0, 0, pyramid[0][0]);
  return answer;
}
let test1 = pyramidDescentPuzzle([[1], [2, 3], [4, 1, 1]], 2);
let test2 = pyramidDescentPuzzle([[2], [4, 3], [3, 2, 6], [2, 9, 5, 2], [10, 5, 2, 15, 5]], 720);
let test3 = pyramidDescentPuzzle([[1]], 1)
let test4 = pyramidDescentPuzzle([], 1)

console.log(test4);