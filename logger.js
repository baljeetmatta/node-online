// //Wrapper function 

// const url="Web URL";
// const log=()=>{
//     console.log("Log called..");
// }
// //console.log(url);
// //console.log(module);
// //module.exports.WEB_URL=url;
// //module.exports.log=log;
// //module.exports={url,log};
// module.exports=log;
// module.exports=url;


// const EventEmitter=require("events");
// const emitter=new EventEmitter();   
// const log=()=>{
//     console.log("Log called.. and task being performed");
//     emitter.emit("logDone");
// }

// emitter.on("logDone",()=>{
//     console.log("Log event handled");
// });

// log();
const EventEmitter=require("events");//core node
const emitter=new EventEmitter();
const log=()=>{
    console.log("Log called.. and task being performed");
    emitter.emit("logDone");
}

module.exports={log,emitter};



