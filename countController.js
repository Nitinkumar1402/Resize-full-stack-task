const CountData = require('./models/CountData');

const updateCount = async (operation) => {
  try {
    let countData = await CountData.findOne({ operation });
    if (!countData) {
      countData = new CountData({ operation, count: 1 });
    } else {
      countData.count += 1;
    }
    await countData.save();
  } catch (err) {
    console.error('Error updating count:', err);
  }
};

const getCount = async () => {
  try {
    const addCountData = await CountData.findOne({ operation: 'add' });
    const updateCountData = await CountData.findOne({ operation: 'update' });
    const addCount = addCountData ? addCountData.count : 0;
    const updateCount = updateCountData ? updateCountData.count : 0;
    return { addCount, updateCount };
  } catch (err) {
    console.error('Error getting count:', err);
    return { addCount: 0, updateCount: 0 };
  }
};

module.exports = { updateCount, getCount };
