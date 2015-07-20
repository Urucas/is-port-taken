import net from 'net';

export default function liamNesson(port, host) { 
  
  function *hisDaughter(port, host) {
    
    var server = net.createServer(null, function() {});
    server.on('error', function(err) {
      console.log("error");
      server.close();
      if (err.code == 'EADDRINUSE') {
        console.log("taken");
        yield true;
      }else {
        yield err;
      }
    });
    server.listen(port, host, function (err) {
      server.close();
      if (err.code == 'EADDRINUSE') {
        console.log("taken");
        yield true;
      }else {
        yield false;
      }
    });
  }
  
  console.log(hisDaughter(port, host));
}
