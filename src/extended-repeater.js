const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, {repeatTimes, separator, addition, additionRepeatTimes, additionSeparator}) {
  let arr = [];
  
  if (additionRepeatTimes === undefined) {
    constadditionSeparator = "|";
    arr = new Array(1).fill(addition);
  } else {
    arr = new Array(additionRepeatTimes).fill(addition);
  }
  
  let addSeparator = arr.map((item, index) => {
    return `${index ? `${additionSeparator}` : ''}${item}`;
  }).join('');
  
	let result = str + addSeparator;
  
  if (repeatTimes === undefined) {
    separator = '+';
    lastArr = new Array(1).fill(result)
  } else {
    lastArr = new Array(repeatTimes).fill(result)
  }    

  lastSeparator = lastArr.map((item, index) => {
    return `${index ? `${separator}` : ''}${item}`;
  }).join('');
  
  return lastSeparator;
};
  