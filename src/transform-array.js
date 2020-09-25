const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  
  if (!Array.isArray(arr)) throw new Error();

  let result = [];

  for (let i = 0; i < arr.length; i++) {
    switch(arr[i]) {
      case '--discard-prev':
        if (arr.length !== 0 && arr[i-2] !== "--discard-next") result.pop();
        break;
      case '--discard-next':
        i++;
        break;
      case '--double-next':
        if (i < arr.length - 1) result.push(arr[i+1]);
        break;
      case '--double-prev':
        if (i !== 0 && arr[i-2] !== "--discard-next") result.push(arr[i-1]);
        break;
      default:
        result.push(arr[i]);
    }
  };
  return result;
};