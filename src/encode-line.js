const { NotImplementedError } = require('../lib');

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
  let repeatCount = 1;
  let letter = "";
  let result = "";

  for (let i = 0; i <= str.length; i++) {
    if (str[i] === letter) {
      repeatCount++;
    } else {
      result += repeatCount > 1 ? repeatCount : "";
      result += letter;
      letter = str[i];
      repeatCount = 1;
    }
  }

  return result;
}

module.exports = {
  encodeLine
};
