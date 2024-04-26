const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
  temperature: {
    type: Number,
    required: true,
  },
  humidity: {
    type: Number,
    required: true,
  },
  pressure: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

const Data = mongoose.model("Data", DataSchema);

module.exports = Data;
