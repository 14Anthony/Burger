// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },
    // the variables cols and vals are arrays
    create: function (cols, vals, cb) {
        orm.create("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, stage, cb) {
        orm.update("burgers", objColVals, stage, function (res) {
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