const config = require('./config');
const app = require('./app');
//const User = require('./models/User');
config.log.info("Configuration Started");


//config.app.use(bodyParser.urlencoded({extended: false}));
//config.app.use(bodyParser.json());

//config.app.get('/', (req, res) => res.send('Hello World!'))
//config.app.post('/admin/create/user',(req, res) => User.createNewUser(req,res));
app.listen(3050, () => config.log.info('Example app listening on port 3050!'));
