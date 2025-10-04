const express=require("express");
const path=require("path")
const app=express(); // createserver
//index.html
app.use(express.static("."));
app.use(express.urlencoded({extended:false}));
//body parser
// 1. Express -urlencoded
// 2. Bodyparser external module
// libray -> parse body-> querystring->Simple json key/pair -false
// qs -> Complex json  key/pair true
//GET req.query
//POST req.body->Bodyparser 

app.get("/save",(req,res)=>{

    console.log(req.query);

    res.send("Welcome "+req.query.username);


});

app.post("/save",(req,res)=>{
    //post->req.body
    //post->encoded
    console.log(req.body);

    res.send("Welcome "+req.body.username);
})




//createServer((req,res)=>{})
// app.get("/",(req,res)=>{

//     //res.write("ASDSADSA");
//     //res.end();
//     console.log(__dirname);

//     //res.send("asdsadsa");
//     res.sendFile(__dirname+"/index.html");


// })
// app.get("/style.css",(req,res)=>{
//     res.sendFile(__dirname+"/style.css");
// })





app.listen(3000);//listen to a port 3000

