const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let number = [];

  backyard.forEach(item => {
    number = number.concat(item.filter(el => el === '^^'));
  });

  return number.length;
}