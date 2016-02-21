"use strict";

var mongoose = require("../../config/mongoose");
var Schema = mongoose.Schema;

var schemas = {
	userSchema : new Schema({
		email: {type: String, require: true, index: {unique: true}},
		password: {type: String},
		dni: {type: String, index: {unique: true}},
		nombres: {type: String},
		apellidos: {type: String},
		telefono: {type: Number},
		creacion: {type: Date, default: Date.now}
	})
	/*perfilSchema = new Schema({

	})*/
};
module.exports = schemas;
