var express = require('express'),
    app = express(),
    ejs = require('ejs'),
    bodyparser = require('body-parser'),
    mongoose = require('mongoose'),
    session = require('express-session'),
    findUserDataCtrl = require('./controllers/FindUserDataCtrl.js'),
    checkForSessionCtrl = require('./controllers/CheckForSession.js'),
    savePostCtrl = require('./controllers/SavePostCtrl.js'),
    postSchema = require('./model/postschema.js'),
    getPostCtrl = require('./controllers/getPostCtrl.js'),
    getPostContentOnload = require('./controllers/getPostContentCtrl.js'),
    dbConnection = require('./config/mongoconnect.js'),
    saveComments = require('./controllers/SaveCommentsCtrl.js'),
    http = require('http').Server(app),
    io = require('socket.io')(http);



app.use(express.static(__dirname + '/config'))
app.use(express.static(__dirname + '/controllers'))
app.use(express.static(__dirname + '/helpers'))
app.use(express.static(__dirname + '/model'))
app.use(express.static(__dirname + '/public/css'))
app.use(express.static(__dirname + '/public/images'))
app.use(express.static(__dirname + '/public/js'))
app.use(express.static(__dirname + '/public/js/controllers'))
app.use(express.static(__dirname + '/public/js/directives'))
app.use(express.static(__dirname + '/public/js/services'))

app.use(express.static(__dirname + '/public/lib'))

app.use(express.static(__dirname + '/services'))
app.use(express.static(__dirname + '/views'))
app.use(express.static(__dirname + '/views/templates'))

app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(session({
    secret: 'itsSecret',
    resave: false,
    saveUninitialized: true,

}))


app.use(bodyparser.json());
app.get('/', function (req, res) {

    res.render('index.ejs')
    res.end()
})

app.get('/checkForSession', checkForSessionCtrl)

app.post('/getData', findUserDataCtrl)

app.post('/postContent', savePostCtrl)

app.post('/postContent', getPostCtrl)

app.post('/getPostContent', getPostContentOnload)

app.post('/postComments', saveComments)


app.post('/storeLike', function (req, res) {
    dbConnection.connect();

    postSchema.findOne({ //change here...................not updating save it
        _id: req.body._id
    }, function (err, resultdata) {

        if (!err) {
            //console.log(post);
            statusobj = resultdata.likes.filter(function (e) {
                return e === req.session.profilename
            })
            console.log(statusobj)

            if (statusobj.length === 0) {
                resultdata.likes.push(req.session.profilename)
                console.log("pushed")
            }

            resultdata.save(function (err, data) {
                if (err) {

                    console.log(err);
                    res.send();
                } else {
                    console.log("saved");
                    res.send(data);
                }
                dbConnection.close();
            });
        }
    });

});


app.post('/removeLike', function (req, res) {
    dbConnection.connect();

    postSchema.findOne({ //change here...................not updating save it
        _id: req.body._id
    }, function (err, resultdata) {

        if (!err) {
            //console.log(post);
            resultdata.likes.pop(req.session.profilename);

            resultdata.save(function (err, data) {
                if (err) {

                    console.log(err);
                    res.send();
                } else {
                    console.log("removed");
                    res.send(data);
                }
                dbConnection.close();
            });
        }
    });

});

io.on('connection', function (socket) {

    socket.on('updatePostWall', function (msg) {

        console.log(msg)

        socket.broadcast.emit('updatePost', msg);

    })


})






http.listen(3000, function () {

    console.log("listing on port 2001");
});
