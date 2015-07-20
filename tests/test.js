import taken from '../lib/brian';

describe("is-port-taken tests", () => {

  it("should return boolean", (done) => {
    let flag = taken(8009, '127.0.0.1');
  })

});
 
