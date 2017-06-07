import * as express from 'express';
import * as _ from 'lodash';
export let authRouter = express.Router();


authRouter.post('/login', (req, res) => {
  console.log("Login in as to find member ", req.params);
  console.log("Login in as to find member ", req.body);
  req.json({ token: 'token' });
});
