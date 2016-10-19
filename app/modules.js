exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {
    class MyClass {
      constructor(x, y) {
        this.greeting = x;
        this.name = y;
      }
      sayIt() {
        var greet = this.greeting + ', ' + this.name;
        console.log(greet);
        return greet;
      }
      set name(val) {
        this.name = val;
      }
      set greeting(val) {
        this.greeting = val;
      }
    }
    return new MyClass(str1, str2);
  }
};
