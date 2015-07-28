 mongoose = require('mongoose'),
     module.exports = {
         connect: function () {
    mongoose.connect('mongodb://localhost/test')
    return mongoose.connection;
    }
}
