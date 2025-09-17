// // console.log("Hello");
// // //document.
// // //window.document
// // const sayHello=()=>{
// //     console.log("hello called");
// // }
// // sayHello();
// //NODE JS CODE -> OS/FS/EVENTS/HTTP/PATH
// var message="Hi"
// console.log(message);
// //console.log(window);
// console.log(global.message);
// global.test="20";



// //Modules -> path/os/fs/events/http
//  var x=require("./logger");
// //console.log(x.WEB_URL);
// x.log();
// console.log(x.url);
// console.log(x);

// var x=require("./logger");
// //console.log(x);
// x();
// const log=require("./logger");
// // var logger=require("./logger");
// //log=1;

// console.log(log);


//os,fs,path,events
//http
//Wrap
//console.log(__filename);
//console.log(__dirname);
const os= require("os");
console.log(os.freemem());
//Object ->modulename
const path=require("path");
console.log(path.parse(__filename));

const fs=require("fs");
// let data=fs.readFileSync("./data.txt","utf-8");
// console.log(data);
// fs.readFile("./data1.txt","utf-8",(err,data)=>{
//     if(err)
//         console.log("Unable to read file",err);
//     else{
//         console.log(data);
//     }

// })
fs.writeFile("./data.txt","Hello to the code",(err)=>{

});







