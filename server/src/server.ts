import {HttpServer} from './httpServer';
require('./api/models/db');

const debug = require('debug')('red0:server');

//debug('starting red0 ui-server');

const server = new HttpServer();
server.start().then(() => {
  debug('started succesfully');
});
