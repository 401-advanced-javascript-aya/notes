'use strict';
const minimist = require('minimist');
// Exports a constructor function and Use minimist to read command line arguments

function Input() {

  const args = minimist(process.argv.slice(2));
  this.method = this.validateAction(args);
}

Input.prototype.validateAction = function (action = '') {
  let validAddMethods = /^a$|add$/gmi;
    // console.log('object:' ,Object.keys(action));

  for (let i = 1; i < Object.keys(action).length; i++) {
    let key = Object.keys(action)[i];
    if (validAddMethods.test(key)) {
      this.note = action[key];
    } else {
      this.error = 'error';
    }
  };
};

module.exports = Input;