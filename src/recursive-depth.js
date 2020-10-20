const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
		let plunge = 1;
		let depth;
		for (let i of arr) {
			if (Array.isArray(i)) {
				depth = this.calculateDepth(i) + 1;
				if (depth > plunge) plunge = depth;
			}
		}
		return plunge;
	}
};