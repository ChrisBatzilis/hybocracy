import * as express from 'express';

export let collectiveRouter = express.Router();

let collectives = [{ id: 1, name: 'Green Street Hooligans', desc: 'some hippy stuff'},
  { id: 2, name: 'Blue Street Hooligans', desc: 'some hippy stuff'}];

collectiveRouter.get('/', (req, res) => {
  res.json(collectives);  
});

collectiveRouter.post('/', (req, res) => {
  collectives.push(req.body);
  res.json(req.body);  
});