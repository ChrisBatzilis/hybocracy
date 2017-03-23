import * as express from 'express';

export let collectiveRouter = express.Router();

collectiveRouter.get('/', (req, res) => {
  let c1 = ({ id: 1, name: 'Green Street Hooligans', desc: 'some hippy stuff'});
  let c2 = ({ id: 2, name: 'Blue Street Hooligans', desc: 'some hippy stuff'});
  res.json([c1,c2]);  
});