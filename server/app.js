import express from 'express'
import mongoose from 'mongoose'
import routes from './routes'
import bodyParser from 'body-parser'

mongoose.connect('mongodb://admin:garbage123@ds147274.mlab.com:47274/post_stuff', () => {
    console.log('connected to mongodb')
})

// ssh -i "post-stuff.pem" ec2-user@ec2-52-41-222-216.us-west-2.compute.amazonaws.com
// [jimmyfargo @ reactNative] $ scp -i post-stuff.pem ~/Downloads/node-v6.11.3-linux-x64.tar.xz ec2-user@ec2-52-41-222-216.us-west-2.compute.amazonaws.com:/home/ec2-user
const app = express()
app.use(bodyParser.json())
app.use('/api', routes)

export default app