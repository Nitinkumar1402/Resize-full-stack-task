const express = require("express");
const router = express.Router();
const { addData, updateData } = require("./dataController");
const { updateCount, getCount } = require("./countController");
const { getAllData } = require("./getData");
const { success } = require("./response");
// const { updateCount, getCount } = require('./controllers/countController');

router.post("/api/data/add", async (req, res) => {
  try {
    const { name, mobileNumber, email, address } = req.body;
    await addData({ name, mobileNumber, email, address });
    await updateCount("add"); // Update count for adding data
    res
      .status(201)
      .json({ message: "Data added successfully",addData,code: res.statusCode });
  } catch (err) {
    res.status(400).json(success(err.message, {}, res.statusCode));
  }
});

router.put("/api/data/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, mobileNumber, email, address } = req.body;
    const response = await updateData(id, { name, mobileNumber, email, address });
    await updateCount("update");

    console.log('response-----', response);
res.status(200).json(success("Data updated successfully",response, res.statusCode));
  } catch (err) {
    // Handle error
    res.status(400).json(success(err.message, {}, res.statusCode));
  }
});

router.get("/api/data/all", async (req, res) => {
  try {
    const allData = await getAllData();
    res.status(200).json({ data: allData, code: res.statusCode });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/api/count", async (req, res) => {
  try {
    const { addCount, updateCount } = await getCount();
    res.json({
      addCount: addCount,
      updateCount: updateCount,
      code: res.statusCode,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
