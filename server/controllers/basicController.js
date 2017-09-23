const basicController = {}

basicController.get = (req, res) => {
    res.json({
        message: 'welcome to our api!! LETS GOOOOOO'
    })
}

export default basicController