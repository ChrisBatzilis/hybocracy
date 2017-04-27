import * as express from 'express';
import { collectiveRouter } from './collective';
export let router = express.Router();

router.get('/version', (req, res) => {
  res.send('vers 0.0.1 - SNAPSHOT');
});

router.use('/collectives', collectiveRouter);