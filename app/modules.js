exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {
    class MyClass {
      constructor(x, y) {
        this._greeting = x;
        this._name = y;
      }
      sayIt() {
        var greet = this._greeting + ', ' + this._name;
        console.log(greet);
        return greet;
      }
      set name(val) {
        this._name = val;
      }
      set greeting(val) {
        this._greeting = val;
      }
      get name () {
        return this._name;
      }
      get greeting() {
        return this._greeting;
      }
    }
    return new MyClass(str1, str2);
  }
};
