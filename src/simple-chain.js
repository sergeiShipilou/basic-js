const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    return this.arr.push(value);
  },
  removeLink(position) {
    if (position !== number || !Number.isInteger(position) || position >= this.getLength() || position < 1) throw new Error();

		return this.arr.splice(position - 1, 1);	
  },
  reverseChain() {
    return this.arr.reverse();
  },
  finishChain() {
    return this.arr.map((item, index) => {
			return `${index ? '~~' : ''}( ${item} )`;
		}).join('');

  }
};

module.exports = chainMaker;
