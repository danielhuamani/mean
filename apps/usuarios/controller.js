"use strict";

var express = require("express"),
	router = express.Router(),
    User = require("../usuarios/models").User;
router.route("/")
	.get(function(req, res){
		User.find(function(err, users) {
            if (err)
                res.send(err);

            res.json(users);
        });

	});

module.exports = router;
