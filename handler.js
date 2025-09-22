// const EventEmitter=require("events");
// const emitter=new EventEmitter();
// emitter.on("logDone",()=>{
//     console.log("Log event handled");
// }
// );

const logger=require("./logger");
logger.emitter.on("logDone",()=>{
    console.log("Log event handled in app.js");
});

logger.log();
