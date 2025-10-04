const express=require("express");
const fs=require("fs");
const path=require("path");
const userRoutes=require("./routes/userRoutes");
const authRoutes=require("./routes/authRoutes");

const app=express();//server
app.use(express.static("."));
app.use(express.urlencoded({extended:false}))

app.use("/users",userRoutes);
app.use("/auth",authRoutes);




app.listen(3000,(err)=>{
    if(err)
        console.log("unable to start server...")
    else
        console.log("Server Started.")
})