var mongoose = require('mongoose');

var userschema = mongoose.model('users', {

    profilename: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }


});


module.exports = userschema;