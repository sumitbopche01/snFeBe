var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    pass: String,
    mail: String,
    theme: String,
    created: Date,
    access: Date,
    status: Boolean
});

var User = mongoose.model('User', userSchema);
module.exports = User;
