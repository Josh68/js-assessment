exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise((resolve, reject) => {
      resolve(value);
    });
  },

  manipulateRemoteData: function(url) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        return this.response;
      }
    };
    xhr.open("GET", url, true);
    xhr.send;
    return xhr;
  }
};
