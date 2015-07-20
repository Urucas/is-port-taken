import isTaken from '../lib/';

describe("is-port-taken tests", () => {

  it("should return boolean", (done) => {
    let flag = isTaken(8009, '127.0.0.1');
  })

});
 
