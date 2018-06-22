const config = require('./config');
var bodyParser = require('body-parser')
const User = require('./models/User');
config.log.info("Configuration Started");

config.app.use(bodyParser.urlencoded({extended: false}));
config.app.use(bodyParser.json());

config.app.get('/', (req, res) => res.send('Hello World!'))
config.app.post('/admin/create/user',(req, res) => User.createNewUser(req,res));
config.app.listen(3000, () => config.log.info('Example app listening on port 3000!'));