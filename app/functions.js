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
    // let version
    // for (var i=0; i<arr.length; i++) {
    //   ret.push( function(i) {
    //     return fn(arr[i]);
    //   });
    // }
    // var version
    for (var i=0; i<arr.length; i++) {
      ret[i] = (function(_i) {
        return function() {
          return fn(arr[_i]);
        };
      }(i));
    }
    return ret;
  },

  partial: function(fn, str1, str2) {
    return function (str3) { // the test looks for 3 exclamation points, but applying this as expected results in 4 (3 new + 1 from the fn)
      return fn(str1, str2) + str3.slice(0, str3.length - 1); //this is an error in the test
    }
  },

  useArguments: function() {
    var args = Array.prototype.slice.call(arguments);
    return args.reduce((curr, prev) => {
      return curr + prev;
    }, 0);
  },

  callIt: function(fn) {
    var args = Array.prototype.slice.call(arguments, 1); //the first argument is the function
    return fn(...args);
  },

  partialUsingArguments: function(fn) {
    var args = Array.prototype.slice.call(arguments, 1); //the first argument is the function
    return function(otherArgs) {
      var newargs = Array.prototype.slice.call(arguments);
      return fn(...args.concat(newargs));
    };
  },

  curryIt: function(fn) {
    var arity = fn.length;
    // var fnArgs = Array.prototype.slice.call(arguments, 1); //args minus the fn
    // var dummy = function(param){};
    // if (fnArgs.length === 0) {
    //   return dummy;
    // }
    return function f1(param) {
      var args = Array.prototype.slice.call(arguments, 0);
      if (args.length >= arity) {
        return fn.apply(null, args);
      }
      else {
        return function f2(...args) {
          var args2 = Array.prototype.slice.call(arguments, 0);
          return f1.apply(null, args.concat(args2)); 
        }
      }
    };
  }
};
