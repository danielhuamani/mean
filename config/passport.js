var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../apps/usuarios/models').User
var passportConfig = function(server){

	server.use(passport.initialize());
	server.use(passport.session());
	passport.serializeUser(function(user, done) {
	  done(null, user);
	});

	passport.deserializeUser(function(user, done) {
	  done(null, user);
	});
	passport.use(new LocalStrategy({
		usernameFiel: 'username',
		passwordField: 'password',
		},
		function(username, password, done){
			User.findOne({email:username}, function(err, user){
				if(err){
					return done(err);
				}
				if(!user){
					return done(null, false);
				}
				if (user.password != password) {
       			 	return done(null, false);
      			}
      			return done(null, user);
			})

		}
	));
	server.post("/", passport.authenticate('local', {
		successRedirect: "/",
		failureRedirect: '/ingresar',
        failureFlash: true,
	}))
}

module.exports = passportConfig;
