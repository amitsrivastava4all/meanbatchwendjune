const http = require('http');
function isStaticContent(fullPath){
const staticThings = ['.html','.css','.js','.jpeg','.jpg'];
const path = require('path');
let extName = path.extname(fullPath);
return staticThings.indexOf(extName)>=0;
}
function serveStaticContent(uri, response){
    const fs = require('fs');
    const path = require('path');
    let fullPath = path.join(__dirname,'/public'+uri);
    fs.readFile(fullPath,(err,content)=>{
        if(err){
            response.write('404 Error');
        }
        else{
            response.write(content);
        }
        response.end();
    })
}

function handleRequestResponse(request, response){
    if(request.url=='/'){
        const fs = require('fs');
        const path = require('path');
        let fullPath = path.join(__dirname,'/public/index.html');
        fs.readFile(fullPath,(err,content)=>{
            if(err){
                response.write('404 Error');
            }
            else{
                response.write(content);
            }
            response.end();
        })
    }
    else
    if(isStaticContent(request.url)){
        serveStaticContent(request.url, response);
    }
    else{
 response.write('<h1>Hello Client I am Server...</h1>');
  response.end(); // flush
    }
       

        
   
console.log('Inside Handle Req/Res ',request.url);
}
const server = http.createServer(handleRequestResponse);
server.listen(1234,()=>{
    console.log('Server Start');
})