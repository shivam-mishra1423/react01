const express = require("express");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'))

app.get("/", (req, res) => {
    const filepath = path.resolve("view/home.html");
    res.sendFile(filepath);
});

app.get("/login", (req, res) => {
    res.send(`
        <form action="/submit" method="post">

            <input type="text" name="email" placeholder="Enter Email"/><br><br>

            <input type="password" name="password" placeholder="Enter Password"/><br><br>

            <button type="submit">Login</button>

        </form>
    `);
});

app.post("/submit", (req, res) => {
    console.log("User Details:", req.body);
    res.send("This is Submit Page");
});

app.get("/user", (req, res) => {
    res.send("This is User Page");
});

app.listen(3004, () => {
    console.log("Server Running on Port 3004");
});