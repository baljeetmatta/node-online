//2 1. Object, 2. Inherit
const EventEmitter=require("events");//core node
class Logger extends EventEmitter
{
    log=()=>{
        console.log("Log called.. and task being performed");
        this.emit("logDone");
    }
}
module.exports=Logger;
//Logger->Simple Class
//Logger -> EventEmitter ->emitter
//os,path,fs,events, http-basic
//express