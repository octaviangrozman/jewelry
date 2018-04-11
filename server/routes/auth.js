import jwt from 'jwt-simple';
import passport from 'passport';

import User from '../models/user';
import config from '../../config';

const tokenForUser = user => {
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

const signin = (req, res, next) => {
    res.send({ token: tokenForUser(req.user) })
}

const signup = (req, res, next) => {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(422).send({ error: 'You must provide email and password' });
    }
  
    User.findOne({ email }, (err, existingUser) => {
      	if (err) return next(err);
  
      	if (existingUser) {
        	return res.status(422).send({ error: 'Email is in use'});
      	}
  
      	// If a user with email does NOT exist, create and save user record
      	const user = new User({
			email: email,
        	password: password
      	});

      	user.save(function(err, user) {
        	if (err) { return next(err); }

        	// Repond to request indicating the user was created
        	return res.json({ token: tokenForUser(user) });
      	});
    });
  }

const authGoogle = () => passport.authenticate('google', {
	scope: ['profile', 'email']
})

const authGoogleCallback = (req, res) => {
	res.redirect('/');
}

const logout = (req, res) => {
    req.logout();
    res.redirect('/');
}

const currentUser = (req, res) => {
    res.send(req.user);
}

export default {
    signin,
	signup,
	authGoogle,
	authGoogleCallback,	
	logout,
	currentUser
};