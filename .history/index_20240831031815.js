const express = require("express");
const app = express();
const fileRoutes = require("./routes/file");
app.use(express.json());
app.use(fileRoutes);

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb://kasukurthibhargav:<db_password>@undefined/?replicaSet=atlas-f42w12-shard-0&ssl=true&authSource=admin"
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.log(error);
  });
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
