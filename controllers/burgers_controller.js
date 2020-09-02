// Import the express package per the readme

const express = require("express");

//Maximillian, router use.

const router = express.Router();

// Import the model like cats to use its database functions.

const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.

router.get("/", function (req, res, next) {
    burger.selectAll(function (data) {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//post route, burgerName and Devoured.

router.post("/api/burgers", function (req, res, next) {
    burger.insertOne(["burgerName", "devoured"], [req.body.burgerName, req.body.devoured], function (result) {

        // Send back the ID of the new quote

        res.json({ id: result.insertId });
    });
});
// put route for the staging of the burges moving.
router.put("/api/burgers/:id", function (req, res, next) {
    const stage = "id = " + req.params.id;

    console.log("staged", stage, req.body);

    burger.updateOne(
        {
            devoured: req.body.devoured
        },
        stage,
        function (result) {
            if (result.changedRows == 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        }
    );
});


//export module for use elsewhere.
module.exports = router;