const mongoose = require('mongoose');

const updateDataSchema = new mongoose.Schema({
 name: String,
  mobileNumber: String,
  email: String,
  address: String
});

const UpdateData = mongoose.model('UpdateData', updateDataSchema);

module.exports = UpdateData;
