'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _models = require('./../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userController = {};

userController.post = function (req, res) {
    var username = req.body.username;

    var user = new _models2.default.User({
        username: username
    });

    user.save().then(function (newUser) {
        res.status(200).json({
            success: true,
            data: newUser
        });
    }).catch(function (err) {
        res.json({
            message: err
        });
    });
};

userController.getById = function (req, res) {
    var id = req.body.id;

    console.log(id);

    _models2.default.User.findById(id, function (err, user) {
        if (err) {
            res.status(500).json({
                msg: err.message
            });
        }

        res.status(200).json({
            user: user
        });
    });
};

userController.getAll = function (req, res) {
    _models2.default.User.find(function (err, users) {
        if (err) {
            res.json({
                status: 500,
                err: err.message
            });
        }

        res.json({
            users: users
        });
    });
};

userController.delete = function (req, res) {
    var id = req.body.id;

    _models2.default.User.remove({
        _id: id
    }, function (err) {
        if (err) {
            res.status(500).json({
                err: err.message
            });
        }
        res.status(200).json({
            msg: 'user was deleted'
        });
    });
};

exports.default = userController;
//# sourceMappingURL=userController.js.map