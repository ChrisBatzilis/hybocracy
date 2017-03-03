import {router} from './api/index';

const debug = require('debug')('hybo:routes');

export default function (app: any) {
  app.use('/api', router);
  app.use((req, res, next)=> {
    next({message: 'Not Found', status: 404});
  });
};