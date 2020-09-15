const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const RATE_CONSTANT = 0.693;

module.exports = function dateSample(sampleActivity) {

    const MODERN_ACTIVITY = 15; 
    const HALF_LIFE_PERIOD = 5730;
    const RATE_CONSTANT = 0.693;

    let k = RATE_CONSTANT / HALF_LIFE_PERIOD;

    if (typeof sampleActivity !== 'string') {

      return false; 

    } else if (sampleActivity.length === 0) {

      return false;

    } else if (Number(sampleActivity) < 0) {

      return decay = -1 * Math.ceil( (Math.log(MODERN_ACTIVITY / (Math.abs(Number(sampleActivity))))) / k );;

    } else if (sampleActivity.match(/[^0-9]/)) {

      return false;

    } else {

      return decay = Math.ceil( (Math.log(MODERN_ACTIVITY / (Number(sampleActivity)))) / k );

    }

};
