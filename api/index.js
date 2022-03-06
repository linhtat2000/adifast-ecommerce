const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = 5000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DBConnection Successful"))
  .catch((err) => console.log(err));

app.get("/api/", () => {
  console.log("testinggg");
});

app.listen(process.env.PORT || port, () => {
  console.log("Server is running on port:", port);
});
