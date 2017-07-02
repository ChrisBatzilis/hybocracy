import * as express from 'express';
import * as _ from 'lodash';
export let authRouter = express.Router();
//var mongoose = require('mongoose');
import * as mongoose from 'mongoose';
let User = mongoose.model('User');

authRouter.post('/', (req, res) => {
  let user = req.body;
  User.findOne({email: user.email}, (err, founduser) => {
  	if (!err && user.password == founduser.password) {
  	  res.json({ token: 'somenicetoken', user: founduser });		
  	} else {
  	  res.status(401).send('you got no business here');	
  	}
  });
});

authRouter.post('/register', (req, res) => { 
  let user = req.body;
  let newMember = User({firstName: user.firstName, lastName: user.lastName, password: user.password, email: user.email});
  newMember.save((err, response) => {
	
	console.log('err', err);
	console.log('res', response);
	if (err) {
	  res.status(400).send(err.errmsg);
	} else {
	  response.password = '';
	  res.json(response);	
	}
  });
});