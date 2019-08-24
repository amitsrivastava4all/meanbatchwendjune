const events = require('events');
let eventEmitterObject = new events.EventEmitter();

// Hook
eventEmitterObject.on('rec',(msg)=>{
    console.log('Message Rec ',msg );
})
eventEmitterObject.on('rec',(msg)=>{
    console.log('Message Rec ',msg );
})
eventEmitterObject.on('rec',(msg)=>{
    console.log('Message Rec ',msg );
})

eventEmitterObject.on('send',(msg)=>{
    console.log('Message Send ',msg );
})
eventEmitterObject.emit('rec','Hello');
eventEmitterObject.emit('send','Hello');
// UnHook
//eventEmitterObject.removeListener('rec');
//eventEmitterObject.removeAllListeners();

// Register Event
eventEmitterObject.on('dbconnect',()=>{
    console.log('DB Connect Event Fire');
})

// Event Fire
eventEmitterObject.emit('dbconnect');