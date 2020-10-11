'use strict';
const minimist = require('minimist');

// Exports a constructor function and Use minimist to read command line arguments
function Input() {
//   console.log('this is the row argv ',process.argv) // => ["node","index.js",...]
  const args = minimist(process.argv.slice(2)); // minimist outputs => {} and used coz (process.argv) => ["node","index.js",...]
  this.method = this.validateMethod(args.add || args.a); 
}

// evaluates and validates the input On instantiation, 
// (Is the command (i.e. ‘–add’) a valid command Is there data associated with the command)
Input.prototype.validateMethod = function (method = '') {
  //i is for case-insensitive
  const validMethods = /get|put|patch|post|delete/i
  return validMethods.test(method) ? 'adding a note' :method;
}

module.exports = Input;