"use strict";

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/inventario");

module.exports = mongoose;
