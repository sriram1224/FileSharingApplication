const express = require("express");
const app = express();
const fileRoutes = require("./routes/file");
app.use(fileRoutes);
app.use(express.json());
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/fileshareapp")
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.log(error);
  });
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
