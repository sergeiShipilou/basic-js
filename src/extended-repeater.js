const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, {repeatTimes, separator = '+', addition, additionRepeatTimes, additionSeparator = '|'}) {
  let arr = [];
  
  arr = new Array(additionRepeatTimes).fill(addition);

  let addSeparator = arr.map((item, index) => {
    return `${index ? `${additionSeparator || this.additionSeparator}` : ''}${item}`;
  }).join('');
  
  if (addSeparator === 'undefined') {
    result = str
  } else result = str + addSeparator;
  
  let lastArr = new Array(repeatTimes).fill(result)  
  
  let lastSeparator = lastArr.map((item, index) => {
    return `${index ? `${separator || this.separator}` : ''}${item}`;
  }).join('');
  
  return lastSeparator;
};