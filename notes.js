
// #!/usr/bin/env node

'use strict';

const mongoose = require('mongoose');
const MONGOOSE_URL = 'mongodb+srv://Aya93:good401@cluster0.d83w8.mongodb.net/notes?retryWrites=true&w=majority'


mongoose.connect(MONGOOSE_URL, {
  useNewUrlParser : true,
  useUnifiedTopology : true,
  useCreateIndex : true,
  useFindAndModify : false
});


const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const input = new Input();
const notes = new Notes(input);

async function startApp() {
  if (notes.valid()) {
    await notes.execute()
  } else {
    notes.help();
  } 
  mongoose.disconnect();
}

startApp();







