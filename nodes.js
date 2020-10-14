#!/usr/bin/env node
'use strict';

// require js files
const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');


// Instantiates an instance of an “Input” parser module
// (Parses the command line input and returns the command and data)
const input = new Input();
const notes = new Notes(input.data);

notes.valid() ? notes.execute() : notes.help();

