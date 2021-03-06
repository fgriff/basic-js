const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(array) {
    if (!Array.isArray(array)) return 1;

    let deep = 1;

    array.forEach(item => {
      if (Array.isArray(item)) {
        const count = this.calculateDepth(item) + 1;

        if (deep < count) deep = count;
      }
    });

    return deep;
  }
};