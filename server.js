const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

// serve the static content for the app from the public directory
app.use(express.static("public"));




app.listen(PORT, function () {
  console.log("App now listening at localhost:" + PORT);
});