"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
exports.router = express.Router();
exports.router.get('/version', function (req, res) {
    res.send('vers 0.0.1 - SNAPSHOT');
});
//# sourceMappingURL=index.js.map