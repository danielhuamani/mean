"use strict";

var mongoose = require("../../config/mongoose");
var Schema = mongoose.Schema;

var schemas = {
	userSchema : new Schema({
		email: {type: String, require: true},
		password: {type: String, require: true,},
		dni: {type: String},
		nombres: {type: String},
		apellidos: {type: String},
		telefono: {type: Number},
		creacion: {type: Date, default: Date.now}
	})
	/*perfilSchema = new Schema({

	})*/
};
module.exports = schemas;
