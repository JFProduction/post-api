import express from 'express'
import mongoose from 'mongoose'
import routes from './routes'
import bodyParser from 'body-parser'

mongoose.connect('mongodb://localhost:27017/test', () => {
    console.log('connected to mongodb')
})

const app = express()
app.use(bodyParser.json())
app.use('/api', routes)

export default app