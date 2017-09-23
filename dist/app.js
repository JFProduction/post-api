'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.connect('mongodb://admin:garbage123@ds147274.mlab.com:47274/post_stuff', function () {
    console.log('connected to mongodb');
});

var app = (0, _express2.default)();
app.use(_bodyParser2.default.json());
app.use('/api', _routes2.default);

exports.default = app;
//# sourceMappingURL=app.js.map