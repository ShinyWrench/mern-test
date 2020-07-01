// https://bytescout.com/blog/getting-started-with-mern-stack.html
// https://hevodata.com/blog/install-mongodb-on-ubuntu/

const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/api');
const path = require('path');

const app = express();
 
const port = process.env.PORT || 5000;
 
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Setting up database connection
mongoose.connect(process.env.DB, { useNewUrlParser: true })
  .then(() => console.log(`The Database is connected successfully`))
  .catch(err => console.log(err));
 
//using node’s promise because mongoose promise is depreciated
mongoose.Promise = global.Promise;
 
app.use(bodyParser.json());
 
app.use('/api', routes);
 
app.use((err, req, res, next) => {
  console.log(err);
  next();
});

//app.use((req, res, next) => {
//    res.send('Hiya buddy!');
//});
 
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});



