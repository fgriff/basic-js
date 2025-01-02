const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const positions = [];

  const sortedArray = arr
    .filter((item, idx) => item !== -1 ? true : (positions.push(idx), false))
    .sort((a, b) => a - b);

  for (const position of positions) {
    sortedArray.splice(position, 0, -1);
  }

  return sortedArray;
}

module.exports = {
  sortByHeight
};
