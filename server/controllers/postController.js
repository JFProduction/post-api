import db from './../models'

const postController = {}

postController.post = (req, res) => {
    const {  
        title,
        text,
        link,
        userId,
    } = req.body

    const post = new db.Post({
        title,
        text,
        link,
        _creator: userId,
    })

    post.save().then((newPost) => {
        return res.status(200).json({
            success: true,
            data: newPost
        })
    }).catch((err) => {
        return res.status(500).json({
            err: err
        })
    })
}

postController.getAll = (req, res) => {
    db.Post.find({}).populate({
        path: '_creator',
        select: 'username -_id'
    }).populate({
        path: '_comments',
        select: 'text createdAt _creator',
        match: { 'isDeleted': false }
    }).then((posts) => {
        return res.json({
            success: true,
            data: posts
        })
    }).catch((err) => {
        return res.status(500).json({
            err: err
        })
    })
}

postController.getByUser = (req, res) => {
    const { username } = req.body

    db.Post.find({}).populate({
        path: '_creator',
        select: 'username -_id'
    }).then(posts => {
        res.status(200).json({
            posts: posts.filter(post => {
                return post._creator.username === username
            })
        })
    }).catch(err => {
        return res.status(500).json({
            err: err
        })
    })
}

export default postController