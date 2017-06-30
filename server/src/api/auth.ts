import * as express from 'express';
import * as _ from 'lodash';
export let authRouter = express.Router();


authRouter.post('/', (req, res) => {
  
  let user = req.body;
  if (user.password == 'password') {
  	// todo: check real password against db
  	res.json({ token: 'somenicetoken', user: { email: user.email, firstName: 'Chuck', lastName: 'Norris'} });	
  } else {
  	res.status(401).send('you got no business here');
  }

});
