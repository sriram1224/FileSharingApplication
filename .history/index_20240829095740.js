const express = require("express");
const app = express();
const fileRoutes = require("./routes/file");
app.use(fileRoutes);
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017//fileshareapp")
  .then(() => {})
  .catch();
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
