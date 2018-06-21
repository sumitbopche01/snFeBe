
var mongoose = require('mongoose');
var uri = "mongodb+srv://mongo:mongo123@mongocluster-0-lkotd.mongodb.net/test";

function Mongo(){
    mongoose.connect(uri);

    mongoose.Promise = global.Promise;

    db= mongoose.connection;

    db.on('error',console.error.bind(console,'connection error'));

    db.once('open', function() {
        console.log('We are Successfully Connected');
    });
    this.mongoose = mongoose;
}

module.exports.Mongo = Mongo;