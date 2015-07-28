var client_id = "585179350325-9hoi8nv3g31blsgfrromi291rmvesd92.apps.googleusercontent.com",
    secret = "tZ9N33ICSuEwZGsU5td_cmOG";
var express = require('express'),
    ejs = require('ejs'),
    bodyparser = require('body-parser'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    request = require('request');
GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var googleContacts = require('google-contacts-oauth');
var accesstoken, refreshtoken;
var opts;

var app = express();

app.use(express.static(__dirname + '/config'))
app.use(express.static(__dirname + '/controllers'))
app.use(express.static(__dirname + '/helpers'))
app.use(express.static(__dirname + '/model'))
app.use(express.static(__dirname + '/public/css'))
app.use(express.static(__dirname + '/public/img'))
app.use(express.static(__dirname + '/public/js'))
app.use(express.static(__dirname + '/public/js/controllers'))
app.use(express.static(__dirname + '/public/lib'))
app.use(express.static(__dirname + '/services'))
app.use(express.static(__dirname + '/views'))
app.use(express.static(__dirname + '/views/templates'))
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(passport.initialize());
app.use(bodyparser.json());
app.get('/', function (req, res) {

    res.render('index.ejs')

})






// used to serialize the user for the session
passport.serializeUser(function (user, done) {
    done(null, user.id);
});

// used to deserialize the user
passport.deserializeUser(function (id, done) {

    done(null, obj);
});



passport.use(new GoogleStrategy({
        clientID: client_id,
        clientSecret: secret,
        callbackURL: "http://127.0.0.1:3000/auth/google/callback"
    },
    function (accessToken, refreshToken, profile, done) {


        accesstoken = accessToken;
        refreshtoken = refreshToken;
        console.log("accesstoken" + accesstoken);

        // process.nextTick(function () {

        console.log("profile " + profile)
        return done(null, profile);
        //});
    }
));







app.get('/auth/google', passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/plus.login', 'https://www.google.com/m8/feeds/contacts/default/full']
}));


app.get('/auth/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/login'
    }),
    function (req, res) {

        console.log(req.user)


        var linkToken = 'https://www.google.com/m8/feeds/contacts/default/autocomplete?alt=json&access_token=' + accesstoken
        res.render('profile.ejs', {
            link: linkToken
        })
    });



app.get('/showContacts', function (req, res) {


    request.get('https://www.google.com/m8/feeds/contacts/default/autocomplete?alt=json&access_token=' + accesstoken, function (error, response, body) { //its is calls to google service and get the contacts from there
        //console.log(body)

        res.write("<h1>UR contacts</h1> ")
        var contactsObj = JSON.parse(body);
        console.log(contactsObj.feed.entry)
        for (i in contactsObj.feed.entry) {
            console.log("contacts:- " + contactsObj.feed.entry[i].gd$email[0].address)
            res.write("<p>" + contactsObj.feed.entry[i].gd$email[0].address + "</p>")
        }



    })
});







//https://127.0.0.1:3000

app.listen(3000)