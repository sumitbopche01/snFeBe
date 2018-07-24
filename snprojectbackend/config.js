const log = require('./engine/Log');
const mongo = require('./engine/Mongo');
//const express = require('express');

var config = {
    mong_aws : "mongodb+srv://mongo:mongo123@mongocluster-0-lkotd.mongodb.net/test",
    mong_local : "mongodb://localhost/testsnprj"
}

module.exports.log = log;
//module.exports.mongoose = mongo.connect(config.mong_local);
module.exports.config = config;
//module.exports.app = express();
//module.exports.express = express;