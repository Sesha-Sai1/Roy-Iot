const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routers/DataRouter");

const app = express();

const port = 4800;

app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://seshasai9:seshasai1@cluster0.rqbff0n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected Successfully");
  })
  .catch((err) => {
    console.log("Error while Connecting", err);
  });

app.use("/", router);

app.listen(port, () => {
  console.log("Server is Running on this port ", port);
});
