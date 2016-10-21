exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return (/\d/g).test(str);
  },

  containsRepeatingLetter: function(str) {
    return (/([a-zA-Z]+)\1{1,}/).test(str);
  },

  endsWithVowel: function(str) {
    return (/a|e|i|o|u/i).test(str.charAt(str.length - 1));
  },

  captureThreeNumbers: function(str) {
    const matchArr = str.match(/\d{3}/);
    return matchArr ? matchArr[0] : false;
  },

  matchesPattern: function(str) {
    
  },

  isUSD: function(str) {

  }
};
