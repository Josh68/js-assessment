exports = typeof window === 'undefined' ? global : window;

function pad(val) {
  Array.apply(null, Array(8 - val.length));
}

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    const val = this.convertToBinary(num);
    return parseInt(val.charAt(8 - bit), 10);
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    const calc =  num.toString(2);
    const padArr = Array.apply(null, Array(8 - calc.length));
    return padArr.reduce((prev, curr) => { 
      return '0' + prev;
    }, calc );
  },

  multiply: function(a, b) {
    //copped code, commented for me by me
    var decimalPlaces = (function(){ //iife
      function isInt(n){ //definitive check for is this an integer
        return typeof n === 'number' && 
        parseFloat(n) == parseInt(n, 10) && !isNaN(n);
      }
      return function(n){
        var a = Math.abs(n); //get it positive
        var c = a, count = 1; 
        while(!isInt(c) && isFinite(c)){ //until the number's an integer
          c = a * Math.pow(10,count++); //multiply the number by an increasing power of 10
        }
        return count-1;
      };
    }());

    const calc = a * b;
    const places = decimalPlaces(a) > decimalPlaces(b) ? decimalPlaces(a) : decimalPlaces(b);
    console.log(calc);
    const num = calc.toFixed(places) / 1;
    console.log(num);
    return num;
  }
};
