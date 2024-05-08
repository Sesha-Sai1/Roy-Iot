const dataModel = require("../models/Data");

const postData = async (req, res) => {
  try {
    const { temperature, humidity, pressure, timestamp } = req.body;

    const newData = new dataModel({
      temperature,
      humidity,
      pressure,
      timestamp,
    });
    await newData.save();
    res.status(201).json(newData);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error", err });
  }
};

const getData = async (req, res) => {
  try {
    const allData = await dataModel.find({});
    res.send(allData);
  } catch (err) {
    console.log("Error while fetching the data", err);
    res.status(400).json({ message: "Bad Request", err });
  }
};

module.exports = { getData, postData };
