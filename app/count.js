exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    var i = start;
    var intervalFunc = function () {
      if (i <= end) {
        console.log(i);
        i++;
      } else {
        clearInterval(intervalFunc);
      }
    };
    setInterval(intervalFunc, 100);
  }
};
