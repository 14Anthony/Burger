// Import the express package per the readme
const express = require("express");
//Maximillian, router use.
const router = express.Router();
// Import the model like cats to use its database functions.
const burger = require("../models/burger.js");
// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.all(function (data) {
        const hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});
