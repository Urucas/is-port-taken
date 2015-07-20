import monocle from 'monocle-js';
import check from './check';

let checkSync = function*(host, port){
  let cb = (err, flag) => {
    return err ? false : flag;
  }
  check(host, port, cb);
  return (yield cb);
};

export default function isTaken(host, port) {
  return checkSync(host, port).next();
}
