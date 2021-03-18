/* Random Pyramid Generator
level = pyramid height
low = minimum value 
high = maximum value
*/
const createRandomPyramid = (level, low, high) => {
  let pyramid = [];
  let counter = 1;
  while (pyramid.length < level) {
    let temp = [];
    for (let i = 0; i < counter; i++) {
      let num = Math.floor(Math.random() * high + low);
      temp.push(num);
    }
    pyramid.push(temp);
    counter++;
  }

  return pyramid;
}

/* checks if a path only contains l, L, r or R
*/

const checkPathValidation = (path) => {
  let filtered = path.split('').filter(char => {
    return (char.toLowerCase() == 'l' || char.toLowerCase() == 'r') ? false : true;
  })
  return (filtered.length == 0) ? true : false;
}

/* gets the product of a specific path of a specific pyramid
returns the pyramid, the path and the target
*/

const getProductOfPath = (pyramid, path) => {
  if (pyramid.length !== (path.length + 1)) {
    console.log('Path\'s length needs to be pyramid.length - 1');
    return -1;
  }
  if (!checkPathValidation(path)) {
    console.log('Path has invalid characters')
    return -1;
  }
  let pathIndex = 0;
  let xIndex = 0;
  let answer = pyramid[0][0];

  for (let i = 0; i < path.length; i++, pathIndex++) {
    if (path[pathIndex].toUpperCase() == 'L') {
      answer *= pyramid[i+1][xIndex];
    } else {
      answer *= pyramid[i+1][++xIndex];
    }
  }

  return [pyramid, path, answer];
}




// console.log(createRandomPyramid(10,1,10));
console.log(getProductOfPath(createRandomPyramid(4,1,10), 'LRL'));
// console.log(checkPathValidation('Lr'));