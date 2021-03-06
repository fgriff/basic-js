const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  const activity = parseFloat(sampleActivity);

  if (typeof sampleActivity !== 'string' ||
      isNaN(activity) ||
      activity <= 0 ||
      activity > MODERN_ACTIVITY) {
    return false;
  }

  const k = Math.log(2) / HALF_LIFE_PERIOD;
  const t = Math.ceil((Math.log(MODERN_ACTIVITY / activity)) / k);

  return t;
}