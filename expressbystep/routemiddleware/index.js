const express = require("express");

const app = express();

function checkAge(req, res, next) {
    console.log(req.query.age);

    if (!req.query.age || req.query.age < 18) {
        res.send("You are not allowed");
    } else {
        next();
    }
}

app.get("/", checkAge, (req, res) => {
    res.send("Home Page");
});

app.get("/login", checkAge, (req, res) => {
    res.send("This is Login Page");
});

app.get("/users", (req, res) => {
    res.send("This is Users Page");
});

app.get("/products", (req, res) => {
    res.send("This is Products Page");
});

app.listen(3000, () => {
    console.log("Server Started");
});