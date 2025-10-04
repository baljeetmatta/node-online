const express=require("express");
const fs=require("fs");
const path=require("path");
const app=express();//server
app.use(express.static("."));
app.use(express.urlencoded({extended:false}))

// 5 Routes get-> /login, /register, /dashboard
//post->/login /register
app.get("/login",(req,res)=>{
    //absoulte path
    res.sendFile(path.join (__dirname,"./login.html"));

})
app.post("/login",(req,res)=>{
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
                res.redirect("/Dashboard");


        }

    })


})

app.get("/register",(req,res)=>{
    //absoulte path
    res.sendFile(path.join (__dirname,"./signup.html"));

})
app.get("/dashboard",(req,res)=>{
    //absoulte path
    res.sendFile(path.join (__dirname,"./dashboard.html"));

})
app.post("/register",(req,res)=>{

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




app.listen(3000,(err)=>{
    if(err)
        console.log("unable to start server...")
    else
        console.log("Server Started.")
})