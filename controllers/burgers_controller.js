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

//post route, burgerName and Devoured.

router.post("/api/burgers", function (req, res) {
    burger.create(["burgerName", "devoured"], [req.body.burgerName, req.body.dev], function (result) {

        // Send back the ID of the new quote

        res.json({ id: result.insertId });
    });
});
