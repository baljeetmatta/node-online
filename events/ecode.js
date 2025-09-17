const EventEmitter=require("events");
//console.log(events);
//object
const emitter=new EventEmitter();



emitter.emit("messageSent");


//handle
emitter.on("messageSent",(e)=>{
    console.log("Message Sent Event Handled ",e);

})

emitter.emit("messageSent","Hello from server");//raise
