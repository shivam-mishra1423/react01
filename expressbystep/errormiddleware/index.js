const express = require('express');


const app = express();



app.get("/home", (req,res) =>{
    res.send("home page");
})

app.get("/user", (req,res) =>{
    res.send("user page");
})


function errorHandle(error, req,res,next){
    res.status(error.status  || 500).send("try after some time")
}
app.use(errorHandle);
const express = require("express");

const app = express();

app.get("/home", (req, res) => {
    res.send("home page");
});

app.get("/user", (req, res) => {
    res.send("user page");
});

// 404 Middleware
app.use((req, res) => {
    res.status(404).send("Page Not Found");
});

app.listen(2000);
app.listen(2000);