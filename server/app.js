import express from 'express'
import mongoose from 'mongoose'
import routes from './routes'
import bodyParser from 'body-parser'

mongoose.connect('mongodb://admin:garbage123@ds147274.mlab.com:47274/post_stuff', () => {
    console.log('connected to mongodb')
})

const app = express()
app.use(bodyParser.json())
app.use('/api', routes)

export default app