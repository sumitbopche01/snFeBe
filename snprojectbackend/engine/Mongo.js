var mongoose = require('mongoose');
var log = require('./Log');
var mongo = {
    connect : function(env){
        mongoose.connect(env);
        mongoose.Promise = global.Promise;
        db= mongoose.connection;
        db.on('error',console.error.bind(console,'connection error'));
        db.once('open', function() {
            log.info('Mongo is  Connected');
        });
        return mongoose;
    }
}
module.exports = mongo;