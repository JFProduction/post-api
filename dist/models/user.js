'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;


_mongoose2.default.Promise = global.Promise;

var userSchema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: [3, 'Username must be at least 3 characters or more']
    },
    createdAt: { type: Date, default: Date.now },
    isDeleted: { type: Boolean, default: false }
});

// Write some encryption here...

var User = _mongoose2.default.model('User', userSchema);
exports.default = User;
//# sourceMappingURL=user.js.map