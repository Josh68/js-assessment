exports = typeof window === 'undefined' ? global : window;

exports.flowControlAnswers = {
  fizzBuzz: function(num) {
    function evDiv(_num, div) {
        return _num % div === 0;
    }
    
    if (num && typeof num === 'number') {
        const isDiv3 = evDiv(num, 3);
        const isDiv5 = evDiv(num, 5);
        return isDiv3 && !isDiv5 ? 'fizz' : isDiv5 && !isDiv3 ? 'buzz' : isDiv3 && isDiv5 ? 'fizzbuzz' : num;
    }

    // write a function that receives a number as its argument;
    // if the number is divisible by 3, the function should return 'fizz';
    // if the number is divisible by 5, the function should return 'buzz';
    // if the number is divisible by 3 and 5, the function should return
    // 'fizzbuzz';
    //
    // otherwise the function should return the number, or false if no number
    // was provided or the value provided is not a number
    return false;
  }
};
