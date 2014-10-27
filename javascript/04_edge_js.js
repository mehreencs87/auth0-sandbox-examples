return function (cb) {
  var edge = require('edge');
  var f = edge.func(function () {
      /*
        async (i) => { return "Hello " + i + "!"; }
      */});
  f('john doe', cb);
};
