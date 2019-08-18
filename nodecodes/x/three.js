console.log('Hello Node');
const fs = require('fs');
const pathMod = require('path');
let rootPath = pathMod.normalize(__dirname+"/..");
let fullPath = pathMod.join(rootPath,'/y/z.txt');
console.log('FullPath is ',fullPath);
console.log("Root ",rootPath);
console.log(__dirname);
console.log(__filename);
let path = fullPath;
//let path = __filename;
//let path = '/Users/amit/Documents/js-codes/nodecodes/three.js';
//let path = __dirname
fs.readFile(path,(err,content)=>{
    if(err){
        console.log('Error is ',err);
    }
    else{
        console.log('Content is ');
        console.log(content);
        //console.log('Content is '+content);
    }
})
console.log('FS is ',typeof (fs));
function show(){

}
module.exports = show;