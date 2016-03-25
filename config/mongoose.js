"use strict";

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/restaurant");

module.exports = mongoose;
