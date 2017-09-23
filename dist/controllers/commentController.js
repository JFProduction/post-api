'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _models = require('./../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var commentController = {};

commentController.post = function (req, res) {
    var _req$body = req.body,
        userId = _req$body.userId,
        text = _req$body.text,
        postId = _req$body.postId;

    // validation

    var comment = new _models2.default.Comment({
        text: text,
        _creator: userId,
        _post: postId
    });

    comment.save().then(function (newComment) {
        _models2.default.Post.findByIdAndUpdate(postId, { $push: { '_comments': newComment._id } }).then(function (existingPost) {
            res.status(200).json({
                success: true,
                data: newComment,
                existingPost: existingPost
            });
        }).catch(function (err) {
            res.status(500).json({
                message: err
            });
        });
    }).catch(function (err) {
        res.status(500).json({
            message: err
        });
    });
};

exports.default = commentController;
//# sourceMappingURL=commentController.js.map