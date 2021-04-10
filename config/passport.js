const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

const db = require('../models');

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
// passport.use(
// 	new LocalStrategy(
// 		// Our user will sign in using an email, rather than a "username"
// 		{
// 			usernameField: 'email',
// 		},
// 		(email, password, done) => {
// 			console.log('passport email: ', email);
// 			console.log('passport password:', password);
// 			// When a user tries to sign in this code runs
// 			db.User.findOne({ email: email }).then((dbUser) => {
// 				// If there's no user with the given email
// 				if (!dbUser) {
// 					console.log("No DBUSER");
// 					return done(null, false, {
// 						message: 'Incorrect email.',
// 					});
// 				}
// 				// If there is a user with the given email, but the password the user gives us is incorrect
// 				else if (!dbUser.validPassword(password)) {
// 					console.log("No DBPassword");
// 					return done(null, false, {
// 						message: 'Incorrect password.',
// 					});
// 				}
// 				// If none of the above, return the user
// 				return done(null, dbUser);
// 			});
// 		}
// 	)
// );

passport.use(
	new LocalStrategy(
		{
			usernameField: "email",
			passwordField: "password",
		},
		function (email, password, done) {
			db.User.findOne({ email: email })
			.then((dbUser) => {
				console.log("DB User is:");
				console.log(dbUser);
				if (dbUser === null) {
					return done(null, false, {
						message: "Incorrect Username",
					});
				} else if (bcrypt.compare(password, dbUser.password)) {
					
					return done(null, dbUser);
				} else {
					return done(null, false, {
						message: "Password Incorrect",
					});
				}
			});
		}
	)
);

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser((user, cb) => {
	cb(null, user);
});

passport.deserializeUser((obj, cb) => {
	cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
