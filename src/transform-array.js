const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('Argument is not Array');

  const res = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        if (i < arr.length) {
          i += 1;
          res.push(undefined);
        }
        break;

      case '--discard-prev':
        if (i > 0) res.pop();
        break;

      case '--double-next':
        if (i < arr.length - 1) {
          res.push(arr[i + 1]);
        }
        break;

      case '--double-prev':
        if (i > 0) {
          res.push(res[res.length - 1]);
        }
        break;
    
      default:
        res.push(arr[i]);
        break;
    }
  }

  return res.filter(item => item !== undefined);
}