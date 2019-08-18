const fs = require('fs');
const stream = fs.createReadStream('/Users/amit/Documents/MEAN-V/ApplyWatchNodeIntro.mov');
const wstream = fs.createWriteStream('/Users/amit/Documents/MEAN-V/ApplyWatchNodeIntroCOPY.mov')
//stream.pipe(wstream);
//stream.pipe(process.stdout);
// stream.on('data',(chunk)=>{
//     console.log('Chunk is ',chunk);
//     wstream.write(chunk);
// });
stream.on('end',()=>{
    console.log('Stream Ends');
    console.log('COPY Done....');
})
stream.on('error',(err)=>{
    console.log('Stream Error',err);
});
stream.on('open',()=>{
    console.log('Stream Open');
});
stream.on('close',()=>{
    console.log('Stream Close');
})