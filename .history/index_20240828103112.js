const express = require("express");
const app = express();
const fileRoutes = require("./routes/file");
app.use(fileRoutes);
app.listen(3000, () => {
  console.log("Server is running on port 8080");
});
