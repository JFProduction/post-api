'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var allowCrossDomain = function allowCrossDomain(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
};

_app2.default.use(allowCrossDomain);

_app2.default.listen(process.env.PORT || 3000, function () {
    console.log('running on port ' + process.env.PORT || "3000");
});
//# sourceMappingURL=index.js.map