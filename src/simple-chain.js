const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    if (value === undefined) {
      this.chain.push('()');
      return this;
    } 

    this.chain.push(value);
    return this;
  },

  removeLink(position) {
    if (position >= this.chain.length ||
        position <= 0 ||
        isNaN(position)) {
      this.chain = [];
      throw new Error();
    }

    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },
  
  finishChain() {
    for (let i = 0; i < this.chain.length; i++) {
      this.chain[i] = '( ' + this.chain[i] + ' )~~';
    }

    let res = this.chain.join('').slice(0, -2);
    this.chain = [];
    
    return res;
  }
  
};

module.exports = chainMaker;