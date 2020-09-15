const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

    if (!Array.isArray(members)) return false;

    return members.map((item) => {
      if (typeof item === 'string') return item.trim().slice(0, 1).toUpperCase(); /*trim()[0]*/
    }).sort().join('');
 
};
