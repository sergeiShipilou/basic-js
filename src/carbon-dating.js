const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const RATE_CONSTANT = 0.693;

module.exports = function dateSample(sampleActivity) {

    const k = RATE_CONSTANT / HALF_LIFE_PERIOD;
    const SAMPLE_ACTIVITY_NUMBER = parseFloat(sampleActivity, 8);

    if (!sampleActivity
      || typeof sampleActivity !== 'string'
      || !isFinite(SAMPLE_ACTIVITY_NUMBER)
      || (SAMPLE_ACTIVITY_NUMBER >= MODERN_ACTIVITY)
      || (SAMPLE_ACTIVITY_NUMBER <= 0)

    ) return false;

    return Math.ceil(Math.log(MODERN_ACTIVITY / SAMPLE_ACTIVITY_NUMBER) / k );

};
