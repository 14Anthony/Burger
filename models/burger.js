// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    // the variables cols and vals are arrays
    insertOne: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    updateOne: function (objColVals, stage, cb) {
        orm.updateOne("burgers", objColVals, stage, function (res) {
            cb(res);

        });

    },
    delete: function (stage, cb) {
        orm.delete("burgers", stage, function (res) {
            cb(res);
        });
    }
};



module.exports = burger;