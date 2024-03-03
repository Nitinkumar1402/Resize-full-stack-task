const mongoose = require('mongoose');

const addDataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  email: String,
  address: String
});

const AddData = mongoose.model('AddData', addDataSchema);

module.exports = AddData;
