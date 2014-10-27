return function (cb) {
  var net = require('net');
  var host = '';
  var client = net.connect(5000, host, function () {
    client.write('hello');
  });
  client.on('data', function(data) {
    client.end();
    cb(null, data.toString());
  });
};
