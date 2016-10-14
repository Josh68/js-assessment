exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    var i = start;
    console.log(i);
    i++;
    var intervalVar = setInterval(intervalFunc.bind(this), 100);
    function intervalFunc () {
      if (i <= end) {
        console.log(i);
        i++;
      }
    };
    function cancel () {
      clearInterval(intervalVar);
    }
    return {
      cancel: cancel
    };
  }
};
