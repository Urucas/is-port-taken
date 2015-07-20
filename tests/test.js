import isTaken from '../lib/';
import net from 'net';

describe("is-port-taken tests", () => {

  it("should return boolean", (done) => {
    let promise = isTaken(8009, '127.0.0.1');
    promise.then( flag => {
      if(flag === true || flag === false) done();
      throw new Error("returns incorrect value: "+flag);
    });
  });

  it("should return true", (done) => {
    // create temp server
    let port = process.env.PORT || 5000, host = '127.0.0.1';
    var server = net.createServer(null, () => {});
    server.listen(port, host, (err) => {
      let promise = isTaken(port, host);
      promise.then( (flag) => {
        server.close();
        if(flag == true) done();
        throw new Error("Error checking on temp server");
      });
    });
  })

});
 
