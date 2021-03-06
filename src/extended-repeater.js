const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (!options) return str;

  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  const addition = options.hasOwnProperty('addition') ? String(options.addition) : '';
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';

  str = String(str);

  let add = addition + additionSeparator;

  add = add.repeat(additionRepeatTimes);

  add = add.slice(0, -additionSeparator.length);

  str += add + separator;

  str = str.repeat(repeatTimes);

  return str.slice(0, -separator.length);
}



  