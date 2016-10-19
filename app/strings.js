exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
     const re = new RegExp('(.)\\1{' + amount + ',}', 'g');
     return str.replace(re, (match) =>  match.substring(0, amount));
  },

  wordWrap: function(str, cols) {
    //broken
    var strArr = str.split(' ');
    var retStr = strArr.map((str) => {
      return str.split('').map((char, idx) => {
        return (/\s/).test(char) && idx % (cols - 1) === 0 ? '\n' : char;
      }).join('');
    }).map((str, idx, thisArr) => str.length === 1 ? str + ' ' : str + '\n').join('');
    return retStr.substring(0, retStr.length - 1);
  },

  reverseString: function(str) {
    return str.split('').reverse().join('');
  }
};
