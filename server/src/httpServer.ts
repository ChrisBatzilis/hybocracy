import * as express from 'express';
import * as bodyParser from 'body-parser';
import {Express, Application} from 'express';
import {Server} from 'http';
import routes from './routes';
import * as path from 'path';
import * as fs from 'fs';

const debug = require('debug')('red0:httpServer');

function errorHandler(err, req, res, next?) {
  debug('Error' + (req ? ' accessing ' + req.url : ''), err);
  res.status(err.status || 500);
  res.send(err.message);
}

export class HttpServer {
  express: Application;
  server: Server;

  start(): Promise<any> {
      return new Promise((resolve, reject)=> {
          const app = this.express = express();
          app.use(bodyParser.json());

          app.use(express.static(__dirname + '/public'));
          const staticRoot = __dirname + '/../client/';
          if (!fs.existsSync(staticRoot)) {
              debug('No client dir found. Assuming we are in test mode.');
          } else {
              app.use(express.static(staticRoot));
              app.use((req, res, next) => {
                  // if the request is not html then move along
                  let accept = req.accepts(['html', 'json', 'xml']);
                  if (accept !== 'html') {
                      return next();
                  }

                  // if the request has a '.' assume that it's for a file, move along
                  let ext = path.extname(req.path);
                  if (ext !== '') {
                      return next();
                  }

                  fs.createReadStream(staticRoot + 'index.html').pipe(res);
              });
          }

          routes(app);

          app.use(errorHandler);

          let envPort = process.env['PORT'];
          let useThisPort = (envPort != null) ? envPort : 9999;
          console.log('envPort:', envPort);
          console.log('useThisPort:', useThisPort);
          this.server = app.listen(useThisPort, () => {
              const {address, port} = this.server.address();
              debug(`Listening on ${address}:${port}`);
              resolve();
          });
      });
  }
}
