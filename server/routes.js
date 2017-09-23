import express from 'express'
import basicController from './controllers/basicController'
import userController from './controllers/userController'
import postController from './controllers/postController'
import commentController from './controllers/commentController'

const routes = express()

routes.get('/', basicController.get)

routes.post('/signup', userController.post)
routes.get('/getUsers', userController.getAll)
routes.delete('/deleteUser', userController.delete)
routes.post('/userById', userController.getById)

routes.post('/post', postController.post)
routes.get('/posts', postController.getAll)
routes.post('/postsByUser', postController.getByUser)
routes.post('/postById', postController.getById)

routes.post('/comment', commentController.post)

export default routes