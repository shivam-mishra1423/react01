const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/home", (req, res) => {
    res.render("home",{name: 'Shivam mishra',ytchannel:'comming soon' });
});

app.get("/user", (req, res) => {
    res.send("User Page");
});

app.listen(3000, () => {
    console.log("Server Running...");
}); 




