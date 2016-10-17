exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    //return fn.apply(null, arr);
    return fn(...arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return function(otherString) {
      return str + ', ' + otherString;
    }
  },

  makeClosures: function(arr, fn) {
    var ret = [];
    //for (let i=0; i<arr.length; i++) {
      //ret.push( function() {
    for (var i=0; i<arr.length; i++) {
      ret.push( function(i) {
        return fn(arr[i]);
      });
    }
    return ret;
  },

  partial: function(fn, str1, str2) {

  },

  useArguments: function() {

  },

  callIt: function(fn) {

  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {

  }
};
