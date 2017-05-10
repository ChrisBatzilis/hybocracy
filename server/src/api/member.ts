import * as express from 'express';
import * as _ from 'lodash';
export let memberRouter = express.Router();

memberRouter.get('/', (req, res) => {
  res.json([]);  
});

memberRouter.post('/:id', (req, res) => {
  console.log('edit member');
  res.json({ });  
});

memberRouter.post('/', (req, res) => {
  let member = req.body;
  console.log('saving member:', member);
  res.json(member);  
});
