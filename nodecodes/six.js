const fs = require('fs');
console.log('Watch');


fs.watchFile(__filename,(curr, prev)=>{
    console.log('File Change.....');
})
