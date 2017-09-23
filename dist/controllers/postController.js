'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _models = require('./../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var postController = {};

postController.post = function (req, res) {
    var _req$body = req.body,
        title = _req$body.title,
        text = _req$body.text,
        link = _req$body.link,
        userId = _req$body.userId;


    var post = new _models2.default.Post({
        title: title,
        text: text,
        link: link,
        _creator: userId
    });

    post.save().then(function (newPost) {
        return res.status(200).json({
            success: true,
            data: newPost
        });
    }).catch(function (err) {
        return res.status(500).json({
            err: err
        });
    });
};

postController.getAll = function (req, res) {
    _models2.default.Post.find({}).sort('-createdAt').populate({
        path: '_creator',
        select: 'username -_id'
    }).populate({
        path: '_comments',
        select: 'text createdAt _creator',
        match: { 'isDeleted': false }
    }).then(function (posts) {
        return res.json({
            success: true,
            data: posts
        });
    }).catch(function (err) {
        return res.status(500).json({
            err: err
        });
    });
};

postController.getById = function (req, res) {
    var id = req.body.id;

    _models2.default.Post.findById(id).populate({
        path: '_creator',
        select: 'username'
    }).sort('-createdAt').populate({
        path: '_comments',
        select: 'text createdAt _creator',
        match: { 'isDeleted': false }
    }).then(function (post) {
        return res.status(200).json({
            comments: post._comments
        });
    }).catch(function (err) {
        return res.status(500).json({
            err: err
        });
    });
};

postController.getByUser = function (req, res) {
    var username = req.body.username;


    _models2.default.Post.find({}).sort('-createdAt').populate({
        path: '_creator',
        select: 'username'
    }).populate({
        path: '_comments',
        select: 'text createdAt _creator',
        match: { 'isDeleted': false },
        sort: '-createdAt'
    }).then(function (posts) {
        res.status(200).json({
            posts: posts.filter(function (post) {
                return post._creator.username === username;
            })
        });
    }).catch(function (err) {
        return res.status(500).json({
            err: err
        });
    });
};

exports.default = postController;
//# sourceMappingURL=postController.js.map