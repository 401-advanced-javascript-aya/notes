'use strict';

// the outputs in the terminal depending on the command line
const Notes = {};
Notes.fetch = function(opts) {
    // console.log(opts)
    if (opts) {
      if (opts.error || opts.note.length == 0) {
          console.log('Error! Bad Input');
      } else {
        console.log(`Adding Note: "${opts.note}"`);
      }
    }
}

module.exports = Notes;


