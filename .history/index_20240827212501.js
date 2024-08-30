const express = require("express");
const app = express();
const fileRoutes = require("./routes/file");
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
