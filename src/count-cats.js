const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  
  let cats = 0;

  backyard.forEach((item) => {
    item.forEach((item) => {
      if (item === '^^') {
        cats += 1;
      }
    })
  });
    
  return cats; 
};
