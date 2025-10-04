const express=require("express");
//Express Routing
const routes=express.Router();
const fs=require("fs");
const path=require("path")

// 5 Routes get-> /login, /register, /dashboard
//post->/login /register
routes.get("/login",(req,res)=>{
    //absoulte path
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
                res.redirect("/auth/Dashboard");


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


