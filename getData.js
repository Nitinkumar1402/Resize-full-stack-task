const Data = require('./models/Data');

const getAllData = async () => {
  try {
    const allData = await Data.find();
    return allData;
  } catch (err) {
    console.error('Error fetching data:', err);
    return [];
  }
};

module.exports = { getAllData };
