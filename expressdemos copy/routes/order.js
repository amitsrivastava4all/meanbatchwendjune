const express = require('express');
const orderRoutes = express.Router();
orderRoutes.get('/orders',(req, res)=>{
    res.send('You are in Orders');
});
module.exports = orderRoutes;