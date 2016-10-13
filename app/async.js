exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise((resolve, reject) => {
      resolve(value);
    });
  },

  manipulateRemoteData: function(url) { //gotta read the test to understand this one
    var promise = new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status >= 200 && xhr.status < 300) {
            var data = JSON.parse(xhr.response);
            var names = data.people.map((person) => person.name).sort();
            resolve(names);
          } else {
            reject(xhr.statusText);
          }
        } 
      };
      xhr.open("GET", url, true);
      xhr.send();
    });
    return promise;
  }
};
