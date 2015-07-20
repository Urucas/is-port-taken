# is-port-taken

Check if a port is being used

# Usage
```bash
npm install --save is-port-taken
```

** API **
```javascript
import taken from 'is-port-taken';
let promise = isTaken(8009, '127.0.0.1');
    promise.then( (isTaken) => {
      console.log(isTaken ? 'YES' : 'NO');
    });
```

#TODO 
* Create sync method
