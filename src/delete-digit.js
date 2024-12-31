const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let nCopy = String(n);
  let maxNumber = 0;

  for (const digit of String(n)) {
    const number = Number(nCopy.replace(digit, ''));
    maxNumber = Math.max(maxNumber, number);
  }

  return maxNumber;
}

module.exports = {
  deleteDigit
};
