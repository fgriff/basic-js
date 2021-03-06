const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!'; 

  if (!(date instanceof Date)) throw new Error();

  const seasons = {
    spring: [2, 3, 4],
    summer: [5, 6, 7],
    autumn: [8, 9, 10],
    winter: [11, 0, 1]
  };

  const month = Date.prototype.getMonth.call(date);

  for (const key in seasons) {
    if (seasons[key].includes(month)) return key;
  }
}
