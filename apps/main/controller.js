"use strict"

var express = require("express"),
    router = express.Router(),
    User = require("../usuarios/models").User;


router.route("/ingresar")
    .get(function(req, res){
        res.render("main/login.html")
    });
router.route("/")
    .get(function(req, res){

        var head = "BIENVENIDO";
        res.render("common/base.html", {head:head})
    });
router.route("/registrar")
    .get(function(req, res){
        var head = "BIENVENIDO";
        res.render("main/registrar.html", {head:head})
    })
    .post(function(req, res){
        var user = new User({
            'email': req.body.email,
            'password': req.body.password
        });
        user.save(function(err){
            res.redirect("/")
        });

    });
module.exports = router;
