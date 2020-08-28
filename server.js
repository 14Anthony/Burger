const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

// serve the static content for the app from the public directory
app.use(express.static("public"));


//parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//set the handlebars connectivity
const hbs = require("express-handlebars");

app.engine("handlebars", hbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//import the routing and give the server access to them
const routes = require(".controllers/burgers_controllers.js")
app.use(routes);

app.listen(PORT, function () {
  console.log("App now listening at localhost:" + PORT);
});