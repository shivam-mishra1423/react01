const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/add-user", (req, resp) => {
    resp.render("addUser");
});

app.post("/submit-user", (req, resp) => {
    console.log(req.body);
    resp.send("Form Submitted Successfully");
});

app.listen(3000, () => {
    console.log("Server Running on Port 3000");
});