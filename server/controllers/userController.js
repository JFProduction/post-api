import db from './../models'

const userController = {}

userController.post = (req, res) => {
    const { username } = req.body
    const user = new db.User({
        username,
    })

    user.save().then((newUser) => {
        res.status(200).json({
            success: true,
            data: newUser,
        })
    }).catch((err) => {
        res.json({
            message: err,
        })
    })
}

userController.getById = (req, res) => {
    const { id } = req.body
    console.log(id)
    
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