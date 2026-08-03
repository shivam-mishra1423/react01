const express = require('express');
const data = require("./About");



const app=express();

const data1=[
    {
        name:"shivam",
        age:25

    },
    {
        name:"munnu",
        age:26

    },
    {
        name:"Rohan",
        age:25

    }

]

app.get("",(res,resp)=>{
    resp.send("<h1>this is default route</h1>")
})


app.get("/home", (res,resp)=>{
    resp.send(data);
    resp.send("<h1>this is home route</h1>")
})


app.get("/about",  (req, resp)=>{
    resp.send("<h1>this is about route</h1>")
})


app.get("/shivam",  (req, resp)=>{
    resp.send("<h1>this is about route</h1>")
})


app.listen(3000);
console.log("running server");