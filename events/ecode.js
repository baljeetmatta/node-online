const EventEmitter=require("events");//core node
//console.log(events);
//object
const emitter=new EventEmitter();



emitter.emit("messageSent");


//handle
emitter.on("messageSent",(e)=>{
    console.log("Message Sent Event Handled ",e.msg,e.data);

})

emitter.emit("messageSent",{msg:"Hello from emitter",data:10});//raise
