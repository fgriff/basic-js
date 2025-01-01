const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];

  for (let i = 0; i < matrix.length; i++) {
    result.push([]);

    for (let j = 0; j < matrix[i].length; j++) {
      let minesCount = 0;

      const coords = {
        right: [i, j + 1],
        rightDown: [i + 1, j + 1],
        down: [i + 1, j],
        leftDown: [i + 1, j - 1],
        left: [i, j - 1],
        leftUp: [i - 1, j - 1],
        up: [i - 1, j],
        rightUp: [i - 1, j + 1],
      };

      const coordsKeyArr = Object.keys(coords);

      for (let k = 0; k < coordsKeyArr.length; k++) {
        if (coords[coordsKeyArr[k]][0] >= 0 &&
            coords[coordsKeyArr[k]][1] >= 0 &&
            coords[coordsKeyArr[k]][0] < matrix.length &&
            coords[coordsKeyArr[k]][1] < matrix[i].length) {
          if (matrix[coords[coordsKeyArr[k]][0]][coords[coordsKeyArr[k]][1]]) {
            minesCount++;
          }
        }
      }

      result[i].push(minesCount);
    }
  }

  return result;
}

module.exports = {
  minesweeper
};
