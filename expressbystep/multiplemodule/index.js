const express = require("express");
const app = express();

const firstHome = require("./firstpage/Home");
const firstAbout = require("./firstpage/About");

const secondHome = require("./secondpage/Home");
const secondAbout = require("./secondpage/About");

app.use("/first/home", firstHome);
app.use("/first/about", firstAbout);

app.use("/second/home", secondHome);
app.use("/second/about", secondAbout);

app.listen(3000, () => {
    console.log("Server Started");
});