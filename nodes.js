#!/usr/bin/env node
'use strict';

// require js files
require('dotenv').config();
const mongoose = require('mongoose');
const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://aya93:good401@cluster0.o87pl.mongodb.net/notesy?retryWrites=true&w=majority' || 'mongodb://localhost:27017/notesy';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).catch((err) => {
    console.log('Error related to database! ', err.message);
  });;

// Instantiates an instance of an “Input” parser module
// (Parses the command line input and returns the command and data)
const input = new Input();
const notes = new Notes(input.data);

notes.valid() ? notes.execute() : notes.help();

