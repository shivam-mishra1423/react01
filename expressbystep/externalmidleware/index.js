const express = require('express');
const morgon = require('morgan');

const app = express();


app.use(morgon('dev'));
app.get("/", (req,res) =>{
    res.send("home page");
})

app.get("/user", (req,res) =>{
    res.send("user page");
})



app.listen(2000);