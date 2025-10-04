const express=require("express");
const routes=express.Router();
const path=require("path");


routes.get("/dashboard",(req,res)=>{
    //absoulte path
    res.sendFile(path.join (__dirname,"../dashboard.html"));

})

module.exports=routes;
