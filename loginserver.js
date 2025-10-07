const express=require("express");
const fs=require("fs");
const path=require("path");
const cookieparser=require("cookie-parser");
const session=require("express-session");
const userRoutes=require("./routes/userRoutes");
const authRoutes=require("./routes/authRoutes");

const app=express();//server
app.use(cookieparser());
//timeout
app.use(session({
    saveUninitialized:true, //Client->Server(Session create empty/unitilized)
    resave:false, // client->server->session update
    cookie:{
        maxAge:1000*60*60*24, //hours
       // secure:true, //https not http
       httpOnly:true // http request javascript document.cookie X
    }
    ,
    secret:'asds4$@#$34'//encryption key
}))
// req.session
app.use(express.static("."));
app.use(express.urlencoded({extended:false}))

function auth(req,res,next)
{
    if(req.session.user)
        next();
    else
        res.redirect("/users/login");
}
//middleware
//custom middleware
app.use("/users",userRoutes);
app.use("/auth",auth,authRoutes);

//State Management
//Session - client side info to be stored on server
// Client->ID SessionID->Data -cookies
//Login->Session->data
//Dashboard ->Authentication->Session data
// /dashboad 
// modules -> express-session(maintain the session), cookie-parser(ID)



app.listen(3000,(err)=>{
    if(err)
        console.log("unable to start server...")
    else
        console.log("Server Started.")
})