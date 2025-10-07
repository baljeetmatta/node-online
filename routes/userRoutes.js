const express=require("express");
//Express Routing
const routes=express.Router();
const fs=require("fs");
const path=require("path")

// 5 Routes get-> /login, /register, /dashboard
//post->/login /register
routes.get("/login",(req,res)=>{
    //absoulte path
    if(req.session.user)
        res.redirect("/auth/dashboard")
    else
    res.sendFile(path.join (__dirname,"../login.html"));

})
routes.post("/login",(req,res)=>{
    fs.readFile("./users.json","utf-8",(err,data)=>{
        if(err)
            res.send("Invalid username/password"+err);
        else
        {
            let users=JSON.parse(data);
            const results=users.filter((item)=>{
                if(item.username==req.body.username && item.password==req.body.password)
                    return true;
            })
            if(results.length==0)
                res.send("Invalid user/password");
            else
            {
                req.session.user=req.body.username;
                    res.redirect("/auth/Dashboard");
            }


        }

    })


})

routes.get("/register",(req,res)=>{
    //absoulte path
    res.sendFile(path.join (__dirname,"../signup.html"));

})

routes.post("/register",(req,res)=>{

    let users=[];
    let obj={
        username:req.body.username,
        password:req.body.password
    }
    fs.readFile("./users.json","utf-8",(err,data)=>{
        if(err)
            users=[];
        else
            users=JSON.parse(data);

       const results= users.filter((item)=>{
            if(item.username==req.body.username)
                return true;
        })
        if(results.length!=0)
        {
            res.send("Username already exists");

        }
        else{
        users.push(obj);

        fs.writeFile("./users.json",JSON.stringify(users),(err)=>{

            res.send("User Created");

        })
    }



    })


});

module.exports=routes;
//session Management
//http->Connection Less
//Client->Server->New REquest
//Login->Credentials ->Store
//State Management 
// Objects -> Cookies, Session
//Cookies -> Client side information to stored on client
// 1. Temp file ->Browser->Domain -> Expiry period->DAte/time
// Date/time ->Server->Programmer 30 Min -> Antivirus
// 2. File Browser -> file->Permission->Server Firewall
//3. Security
//Session -> Client side information to be stored on server
//Timeout->Non Activity Period 5 min



