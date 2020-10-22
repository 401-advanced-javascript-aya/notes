'use strict';

const minimist = require('minimist');

class Input {
  constructor() {
    const args = minimist(process.argv.slice(2));
    this.methods = this.getMethods(args);

    this.text = args[this.methods[0]] || undefined;
    this.category = args[this.methods[1]];
    this.listAll = this.methods[2];
    this.delete = args[this.methods[3]] || undefined;
    console.log(args);
  }

  getMethods(args) {
    let addMethod = '';
    let categoryMethod = 'N/A';
    let listNotes = false;
    let deleteMethod = '';
    if (args) {
      for (let i = 1; i < Object.keys(args).length; i++) {
        // console.log(Object.keys(args));
        let key = Object.keys(args)[i];
        if (/^a$|add$/gmi.test(key)) addMethod = key;
        if(/^c$|category$/gmi.test(key)) categoryMethod = key;
        if (/^list$/gmi.test(key)) listNotes = true;
        if (/^delete$/gmi.test(key)) deleteMethod = key;
      }
      return [addMethod, categoryMethod, listNotes, deleteMethod];
    } else {
      return undefined;
    }
  }
}

module.exports = Input;