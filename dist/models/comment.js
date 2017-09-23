'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;


_mongoose2.default.Promise = global.Promise;

var commentSchema = new Schema({
    text: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    isDeleted: { type: Boolean, default: false },
    _creator: { type: Schema.ObjectId, ref: 'User' },
    _post: { type: Schema.ObjectId, ref: 'Post' }
});

var autoPopulateCreator = function autoPopulateCreator(next) {
    this.populate({
        path: '_creator',
        select: 'username createdAt -_id'
    });
    next();
};

commentSchema.pre('find', autoPopulateCreator);

var Comment = _mongoose2.default.model('Comment', commentSchema);
exports.default = Comment;
//# sourceMappingURL=comment.js.map