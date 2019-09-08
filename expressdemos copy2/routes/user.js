const express = require('express');
const userRoutes = express.Router();
userRoutes.post('/login',(req, res)=>{
    console.log('POST ',req.body);
    if(req.body.userid==req.body.pwd){
        const path = require('path');
        
        var fullPath = path.join(path.normalize(__dirname+"/.."),'/public/dashboard.html');
        console.log('FullPath is ',fullPath);
        res.sendFile(fullPath);
        //res.send('Welcome '+req.body.userid);
    }
    else{
    res.send('Invalid Userid or Password ');
    }
    });
module.exports = userRoutes;    