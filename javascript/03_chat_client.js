return function (cb) {
  var net = require('net');
  var host = 'www.google.com';
  var client = net.connect(80, host, function () {
    client.write('hello\n\n');
  });
  client.on('data', function(data) {
    client.end();
    cb(null, data.toString());
  });
};
