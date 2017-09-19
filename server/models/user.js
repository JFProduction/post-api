import mongoose from 'mongoose'

const { Schema } = mongoose

mongoose.Promise = global.Promise

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: [5, 'Username must be at least 5 characters or more'],
    },
    createdAt: { type: Date, default: Date.now },
    isDeleted: { type: Boolean, default: false },
})

// Write some encryption here...

const User = mongoose.model('User', userSchema)
export default User