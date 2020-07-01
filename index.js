//https://bytescout.com/blog/getting-started-with-mern-stack.html

const express = require('express');
require('dotenv').config();
 
const app = express();
 
const port = process.env.PORT || 5000;
 
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
 
app.use((req, res, next) => {
    res.send('Hiya buddy!');
});
 
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});
