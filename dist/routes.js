'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _basicController = require('./controllers/basicController');

var _basicController2 = _interopRequireDefault(_basicController);

var _userController = require('./controllers/userController');

var _userController2 = _interopRequireDefault(_userController);

var _postController = require('./controllers/postController');

var _postController2 = _interopRequireDefault(_postController);

var _commentController = require('./controllers/commentController');

var _commentController2 = _interopRequireDefault(_commentController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = (0, _express2.default)();

routes.get('/', _basicController2.default.get);

routes.post('/signup', _userController2.default.post);
routes.get('/getUsers', _userController2.default.getAll);
routes.delete('/deleteUser', _userController2.default.delete);
routes.post('/userById', _userController2.default.getById);

routes.post('/post', _postController2.default.post);
routes.get('/posts', _postController2.default.getAll);
routes.post('/postsByUser', _postController2.default.getByUser);
routes.post('/postById', _postController2.default.getById);

routes.post('/comment', _commentController2.default.post);

exports.default = routes;
//# sourceMappingURL=routes.js.map