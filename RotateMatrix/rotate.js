//

var rotate = function(matrix) {
  const rotateBorder = (matrix, line) => {
      if (line >= Math.floor(matrix.length / 2)) {
          return;
      }
      for (let i = 0; i < matrix[0].length - (line * 2) - 1; i++) {
          let offset = matrix.length - line - 1;
          let temp = matrix[line][line + i];
          matrix[line][line + i] = matrix[offset - i][line];
          matrix[offset - i][line] = matrix[offset][offset - i];
          matrix[offset][offset - i] = matrix[line + i][offset];
          matrix[line + i][offset] = temp;
      }
      rotateBorder(matrix, line + 1);
  }
  rotateBorder(matrix, 0);
  return matrix;
};