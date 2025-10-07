const express=require("express");
const routes=express.Router();
const path=require("path");


routes.get("/dashboard",(req,res)=>{
    //absoulte path
   // if(req.session.user)
    res.sendFile(path.join (__dirname,"../dashboard.html"));
    // else
    //     res.redirect("/users/login");

})

// React -> :parametername, :id -> hook->useParams
//req.query->GET, req.body->POST(body parser), req.params
routes.get("/page/:id",(req,res)=>{
    //if(req.session.user)
    res.send("Page called "+req.params.id+""+req.params.id1);
// else
//         res.redirect("/users/login");
})
routes.get("/logout",(req,res)=>{
    req.session.destroy();
    res.redirect("/users/login");

})
//pattern -> /auth/dashboard, /auth/page 
// /auth/abc
routes.get(/.*/,(req,res)=>{
res.send("Not Found");

})


module.exports=routes;
