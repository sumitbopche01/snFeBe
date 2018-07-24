const User = require('../controllers/User');

module.exports = (app) => {

    app.get('/',(req, res) => res.send('Hello World!'));
}