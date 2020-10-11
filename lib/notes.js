'use strict';

// the outputs in the terminal depending on the command line
const http = {};
http.fetch = function(opts) {
    // console.log(opts)
  if(opts) {
    console.log(`Adding Note: ${opts.method}`);
  }
}

module.exports = http;