import db from './../models'

const userController = {}

userController.post = (req, res) => {
    const { username } = req.body
    const user = new db.User({
        username,
    })
    console.log(username)
    db.User.find({ username: username }, (err, user) => {
        if (err) {
            res.status(500).json({
                msg: err.message
            })
        }
        if (user.length == 0) {
            const user = new db.User({
                username,
            })

            user.save().then((newUser) => {
                res.status(200).json({
                    data: newUser
                })
            }).catch((err) => {
                res.json({
                    message: err,
                })
            })
        } else {
            res.json({
                data: user[0]
            })
        }
    })
}

userController.userByName = (req, res) => {
    const { username } = req.body

    db.User.find({ username: username }, (err, user) => {
        if (err) {
            res.status(500).json({
                msg: err.message
            })
        }
        
        res.status(200).json({
            user: user
        })
    })
}

userController.getById = (req, res) => {
    const { id } = req.body
    db.User.findById(id, (err, user) => {
        if (err) {
            res.status(500).json({
                msg: err.message
            })
        }

        res.status(200).json({
            user: user
        })
    })
}

userController.getAll = (req, res) => {
    db.User.find((err, users) => {
        if (err) {
            res.json({
                status: 500,
                err: err.message
            })
        }

        res.json({
            users: users
        })
    })
}

userController.delete = (req, res) => {
    const { id } = req.body
    db.User.remove({
        _id: id
    }, (err) => {
        if (err) {
            res.status(500).json({
                err: err.message
            })
        }
        res.status(200).json({
            msg: 'user was deleted'
        })
    })
}

export default userController