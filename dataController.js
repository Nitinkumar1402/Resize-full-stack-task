const mongoose = require('mongoose');
const Data = require('./models/Data');

const addData = async (data) => {
  const newData = new Data(data);
  await newData.save();
};

const updateData = async (id, newData) => {
  await Data.findByIdAndUpdate(id, { $set: newData },{ new: true });
};

let addCount = 0;
let updateCount = 0;

const incrementAddCount = () => {
  addCount++;
};

const incrementUpdateCount = () => {
  updateCount++;
};

const getCount = () => {
  return { addCount, updateCount };
};

module.exports = { addData, updateData, incrementAddCount, incrementUpdateCount, getCount };
