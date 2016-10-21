exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {

  },

  base10: function(str) {

  },

  convertToBinary: function(num) {

  },

  multiply: function(a, b) {
    Number.prototype.toFixedNumber = function(x, base){
      const pow = Math.pow(base||10,x);
      console.log(this);
      console.log(pow);
      return +( Math.round(this*pow) / pow );
    };
    const calc = a * b;
    return calc.toFixed(1)/1;
  }
};
