#!/usr/bin/env node
'use strict';

// require js files
const Input = require('./lib/input.js');
const notes = require('./lib/notes.js');

// Instantiates an instance of an “Input” parser module
// (Parses the command line input and returns the command and data)
const options = new Input();
notes.fetch(options)
