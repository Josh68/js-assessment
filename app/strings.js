exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  // reduceString: function(str, amount) {
  //   const matches = {};
  //   var newStr = str;
  //   for (let i=0; i<str.length; i++) {
  //     const char = str.charAt(i);
  //     const re = new RegExp(char, 'g');
  //     //matches[char] = matches[char] ? matches[char] : str.match(re);
  //     matches[char] = matches[char] ? matches[char] : str.match(re);
  //     if (matches[char].length > amount) {
  //        console.log('matches for ' + char + ': ' + matches[char].length + ', amount to leave: ' + amount);
  //        newStr = newStr.slice(0, newStr.lastIndexOf(char)) + newStr.slice(newStr.lastIndexOf(char) + 1);
  //        matches[char].pop();
  //     }
  //   }
  //   console.log(str);
  //   return newStr;
  // },

  reduceString: function(str, amount) {
     const re = new RegExp('(.)\\1{' + amount + ',}', 'g');
     //const matches = str.match(re);
     //console.log(matches);
     return str.replace(re, (match) =>  match.substring(0, amount));
  },

  wordWrap: function(str, cols) {

  },

  reverseString: function(str) {

  }
};
