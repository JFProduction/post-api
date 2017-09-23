import app from './app'

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type')

    next()
}

app.use(allowCrossDomain)

app.listen(process.env.PORT || 3000, () => {
    console.log('running on port ' + process.env.PORT || "3000")
})