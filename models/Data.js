const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  name: String,
  mobileNumber: String,
  email: String,
  address: String
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
