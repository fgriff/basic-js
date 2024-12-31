const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let repeatsCount = 1;
  let letter = '';
  let result = '';

  for (let i = 0; i <= str.length; i++) {
    if (str[i] === letter) {
      repeatsCount++;
    } else {
      result += repeatsCount > 1 ? repeatsCount : '';
      result += letter;
      letter = str[i];
      repeatsCount = 1;
    }
  }

  return result;
}

module.exports = {
  encodeLine
};
