'use strict';

const mongoose = require('mongoose');

const note = mongoose.Schema({
  text: { type: 'string' },
  category: { type: 'string' }
});

module.exports = mongoose.model('note', note);
