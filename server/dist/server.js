"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var httpServer_1 = require("./httpServer");
var debug = require('debug')('red0:server');
debug('starting red0 ui-server');
var server = new httpServer_1.HttpServer();
server.start().then(function () {
    debug('started succesfully');
});
//# sourceMappingURL=server.js.map