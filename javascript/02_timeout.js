return function (cb) {
  setTimeout(function () {
    return cb(null, 77);
  }, 1000);
};
