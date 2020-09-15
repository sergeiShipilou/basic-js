const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

	const SEASON = [
      'winter',
      'winter',
      'spring',
      'spring',
      'spring',
      'summer',
      'summer',
      'summer',
      'fall',
      'fall',
      'fall',
      'winter'];

 	if (!date) return 'Unable to determine the time of year!';

  if (date.prototype !== new Date().prototype || !date.getUTCDate()) throw new Error();

  return SEASON[date.getMonth()];

};
