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

	})
	.post(function(req, res, next){
		console.log("---------------")
        console.log("test")
        console.log(req.body)

        var user = new User(req.body);
        user.save(function(err, user){
            if(err){
                return next(err)
            }
            res.json(user)
        });
	});

module.exports = router;
