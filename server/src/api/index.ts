import * as express from 'express';
import { collectiveRouter } from './collective';
import { memberRouter } from './member';
import { authRouter } from './auth';
export let router = express.Router();

router.get('/version', (req, res) => {
  res.send('vers 0.0.1 - SNAPSHOT');
});

router.use('/collectives', collectiveRouter);

router.use('/members', memberRouter);

router.use('/auth', authRouter);
