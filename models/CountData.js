const mongoose = require('mongoose');

const countDataSchema = new mongoose.Schema({

    operation: String,
  count: Number
});

const CountData = mongoose.model('CountData', countDataSchema);

module.exports = CountData;
