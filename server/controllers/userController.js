import db from './../models';

const userController = {};

userController.post = (req, res) => {
    const { username } = req.body;

    // validation

    const user = new db.User({
        username,
    });

    user.save().then((newUser) => {
        res.status(200).json({
            success: true,
            data: newUser,
        });
    }).catch((err) => {
        res.status(500).json({
            message: err,
        });
    });
}

export default userController;