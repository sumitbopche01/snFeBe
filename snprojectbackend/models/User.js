const config = require('./../config');
const userSchema = require('./../schema/UserSchema')
var user = new Object;

user.createNewUser = function(req,response){
    var userModel = config.mongoose.model('User', userSchema);
    var userObject = new userModel({
        name: req.body.name
    });
    userObject.save();
    response.json(userObject)
    //var userObj = new userModel(user);
    //userObj.save();
}
module.exports = user;
