import net from 'net';
export default function check(port, host, cb) {
  var server = net.createServer(null, () => {});
  server.on('error', (err) => {
    server.close();
    if (err.code == 'EADDRINUSE') {
      cb(null, true);
    }else {
      cb(err);
    }
  });
  server.listen(port, host, (err) => {
    server.close();
    if (err.code == 'EADDRINUSE') {
      cb(null, true);
    }else {
      cb(null, false);
    }
  });

};

