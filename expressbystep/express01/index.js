const express= require('express');

const app=express();

app.get("", (req,res)=>{
    res.send("<h1> basic node  home")
})

app.get("/about", (req,res)=>{
    res.send("<h1> basic node js")
})


app.get("/home", (req,res)=>{
    res.send("<h1>this  home page</h1>")
})

app.listen(3200);