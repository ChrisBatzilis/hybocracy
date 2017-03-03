"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./api/index");
var debug = require('debug')('hybo:routes');
function default_1(app) {
    app.use('/api', index_1.router);
    app.use(function (req, res, next) {
        next({ message: 'Not Found', status: 404 });
    });
}
exports.default = default_1;
;
//# sourceMappingURL=routes.js.map