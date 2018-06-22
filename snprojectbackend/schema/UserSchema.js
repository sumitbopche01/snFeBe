const config = require('./../config');

var Schema = config.mongoose.Schema;

var userSchema = new Schema({
    name: String,
    pass: String,
    mail: String,
    theme: String,
    created: Date,
    access: Date,
    status: Boolean,
    role : Array
});

module.exports = userSchema;