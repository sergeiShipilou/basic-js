const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
	
  getLength() {
    return this.arr.length;
  },
	
  addLink(value = ' ') {
    this.arr.push(value);
		return this;
  },
	
  removeLink(position) {
    if (!Number.isInteger(position) 
			|| position >= this.getLength() 
			|| position < 1) {
        this.arr = [];
				throw new Error();
			}
		this.arr.splice(position - 1, 1);	
		return this;
  },
	
  reverseChain() {
    this.arr.reverse();
    return this;
  },
	
  finishChain() {
    const res = this.arr.slice();
    
    this.arr = [];
    
    return res.map((item, index) => {
			return `${index ? '~~' : ''}( ${item} )`;
		}).join('');
  }
};

module.exports = chainMaker;