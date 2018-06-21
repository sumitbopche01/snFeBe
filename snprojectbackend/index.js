const express = require('express')
const app = express()
var Mongo = require('./engine/Mongo');

let db = new Mongo.Mongo();

console.log(db.mongoose);
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'));


