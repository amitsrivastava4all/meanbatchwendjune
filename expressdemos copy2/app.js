const express = require('express');
const bodyParser = require("body-parser");
const userRoutes = require('./routes/user');
const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/',userRoutes);

app.listen(1234,()=>{
    console.log('Server Start');
})