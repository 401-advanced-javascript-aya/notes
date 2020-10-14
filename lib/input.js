'use strict';
const minimist = require('minimist');

class Input {
  constructor() {
    const args = minimist(process.argv.slice(2));
    this.method = this.getMethod(args); // call get method function
    this.note = this.addData(this.method, args);
    this.data = [this.method, this.note];
  }
  getMethod(args) {
    if (args) {
      let validAddMethods = /^a$|add$/gmi;
      // console.log('jjjj' , Object.keys(args));
        let key = Object.keys(args)[1]; //args = { _: [], add: 'Aaaa' } so we need only key 1 to check if it is add or a
        return validAddMethods.test(key) ? key : 'Invalid';
      } else 
      
      return undefined;
    }
    
    addData(key, args) {
      console.log('key',key);
    return (key &&  key != 'Invalid' && args[key] && args[key].length > 0) ? args[key] : undefined;
  }
}
module.exports = Input;
