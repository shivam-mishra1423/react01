const express = require("express");

const app = express();

function Agecheck(req, res, next) {
    if (!req.query.age || req.query.age < 18) {
        res.send("Alert! You cannot access this page");
    } else {
        next();
    }
}

app.use(Agecheck);

app.get("/", (req, res) => {
    res.send("This is Home Page");
});

app.get("/login", (req, res) => {
    res.send("This is Login Page");
});

app.get("/admin", (req, res) => {
    res.send("This is Admin Page");
});

app.listen(3000, () => {
    console.log("Server Running...");
});