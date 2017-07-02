import * as express from 'express';
import * as _ from 'lodash';
export let authRouter = express.Router();
//var mongoose = require('mongoose');
import * as mongoose from 'mongoose';
let User = mongoose.model('User');

authRouter.post('/', (req, res) => {
  
  let user = req.body;
  if (user.password == 'password') {
  	// todo: check real password against db
  	res.json({ token: 'somenicetoken', user: { email: user.email, firstName: 'Chuck', lastName: 'Norris'} });	
  } else {
  	res.status(401).send('you got no business here');
  }

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