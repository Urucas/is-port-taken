import net from 'net';
export default function check(port, host) {

  return new Promise( (resolve, reject) => {
    
    var server = net.createServer(null, () => {});
    server.on('error', (err) => {
      server.close();
      if (err.code == 'EADDRINUSE') {
        resolve(true);
      }else {
        resolve(false);
      }
    });

    server.listen(port, host, (err) => {
      server.close();
      if (err && err.code == 'EADDRINUSE') {
        resolve(true);
      }else {
        resolve(false);
      }
    });

  });
  
};

