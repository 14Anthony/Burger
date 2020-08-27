const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();


app.listen(PORT, function () {
  console.log("App now listening at localhost:" + PORT);
});