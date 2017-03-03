import * as express from 'express';

export let router = express.Router();

router.get('/version', (req, res) => {
  res.send('vers 0.0.1 - SNAPSHOT');
});