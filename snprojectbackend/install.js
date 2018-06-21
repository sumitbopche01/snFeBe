const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

mongoose.Promise = global.Promise;

var db= mongoose.connection;

db.on('error',console.error.bind(console,'connection error'));

db.once('open', function() {
    console.log('We are Successfully Connected');
    // var silence = new Kitten({ name: 'Silence' });
   // console.log(silence.name); // 'Silence'
});

var Schema = mongoose.Schema;

var kittySchema = new Schema({
    name: String
    });

var Kitten = mongoose.model('Kitten', kittySchema); 
