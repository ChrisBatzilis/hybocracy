"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var routes_1 = require("./routes");
var path = require("path");
var fs = require("fs");
var debug = require('debug')('red0:httpServer');
function errorHandler(err, req, res, next) {
    debug('Error' + (req ? ' accessing ' + req.url : ''), err);
    res.status(err.status || 500);
    res.send(err.message);
}
var HttpServer = (function () {
    function HttpServer() {
    }
    HttpServer.prototype.start = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var app = _this.express = express();
            app.use(bodyParser.json());
            app.use(express.static(__dirname + '/public'));
            var staticRoot = __dirname + '/../client/';
            if (!fs.existsSync(staticRoot)) {
                debug('No client dir found. Assuming we are in test mode.');
            }
            else {
                app.use(express.static(staticRoot));
                app.use(function (req, res, next) {
                    // if the request is not html then move along
                    var accept = req.accepts(['html', 'json', 'xml']);
                    if (accept !== 'html') {
                        return next();
                    }
                    // if the request has a '.' assume that it's for a file, move along
                    var ext = path.extname(req.path);
                    if (ext !== '') {
                        return next();
                    }
                    fs.createReadStream(staticRoot + 'index.html').pipe(res);
                });
            }
            routes_1.default(app);
            app.use(errorHandler);
            var envPort = process.env['PORT'];
            var useThisPort = (envPort != null) ? envPort : 9999;
            console.log('envPort:', envPort);
            console.log('useThisPort:', useThisPort);
            _this.server = app.listen(useThisPort, function () {
                var _a = _this.server.address(), address = _a.address, port = _a.port;
                debug("Listening on " + address + ":" + port);
                resolve();
            });
        });
    };
    return HttpServer;
}());
exports.HttpServer = HttpServer;
//# sourceMappingURL=httpServer.js.map