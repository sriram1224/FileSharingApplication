const express = require("express");
const app = express();
const fileRoutes = require("./routes/file");
app.use(express.json());
app.use(fileRoutes);
const dotenv = require("dotenv");
dotenv.config();
const mongo = process.env.MONGO;
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.log(error);
  });
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
