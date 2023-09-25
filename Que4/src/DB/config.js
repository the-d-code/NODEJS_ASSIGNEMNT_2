const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/StudentDB", { family: 4 })
  .then(() => {
    console.log("connection successfully");
  })
  .catch((err) => {
    console.log("connection failed ");
  });
