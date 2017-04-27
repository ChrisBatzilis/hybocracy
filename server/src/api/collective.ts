import * as express from 'express';
import * as _ from 'lodash';
export let collectiveRouter = express.Router();

let collectives = [{ id: 1, name: 'Green Street Hooligans', desc: 'some hippy stuff'},
  { id: 2, name: 'Blue Street Hooligans', desc: 'some hippy stuff'}];

let nextId = 3;

collectiveRouter.get('/', (req, res) => {
  res.json(collectives);  
});

collectiveRouter.post('/:id', (req, res) => {
  //let index = collectives.findIndex((col) => { return col.id == req.params.id;});
  _(collectives).findIndex((col) => { return col.id == req.params.id;}).value();
  collectives[0] = req.body;
  res.json(req.body);  
});

collectiveRouter.post('/', (req, res) => {
  let coll = req.body;
  coll.id = nextId;
  nextId++;
  collectives.push(coll);
  res.json(coll);  
});
