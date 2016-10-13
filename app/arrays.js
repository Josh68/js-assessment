exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce((prev, next) => {
      return prev + next;
    }, 0);
  },

  remove: function(arr, item) {
    return arr.filter((val) => val !== item);
  },

  removeWithoutCopy: function(arr, item) {
    while (arr.indexOf(item) > 0) {
      arr.splice(arr.indexOf(item), 1);
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop(arr[arr.length]);
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.splice(0, 1);
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var count = 0;
    while(arr.indexOf(item) > 0) {
      arr.splice(arr.indexOf(item), 1);
      count++;
    }
    return count;
  },

  duplicates: function(arr) {
    var newArr = [];
    return arr.filter((val, idx, thisArr) => {
      if(thisArr.indexOf(val) !== thisArr.lastIndexOf(val) && newArr.indexOf(val) === -1) {
        newArr.push(val);
        return true;
      }
      return false;
    });
  },

  square: function(arr) {
    return arr.map((val) => val*val);
  },

  findAllOccurrences: function(arr, target) {
    var returnArr = [];
    arr.forEach((val, idx, thisArr) => {
      if (val === target) {
        returnArr.push(idx);
      }
    });
    return returnArr;
  }
};
 