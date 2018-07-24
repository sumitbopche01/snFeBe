const express = require('express');
const routes = require('./routes/routes');
const mongoose = require('mongoose');
const bodyParser =  require('body-parser');
const config = require('./config');


const app = express();

mongoose.Promise = global.Promise;

if(process.env.NODE_ENV !== 'test'){

    mongoose.connect(config.mongo_local,function(err){
        if(err) throw err;
        config.log.info(`Successfully connected to ${config.mongo_local}`)
    });
}

app.use(bodyParser.json());
routes(app);
app.use((err,req,res,next) => {
        res.status(422).send({error: err.message});
});

module.exports = app;
