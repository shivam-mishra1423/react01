const express = require("express");
const { handleUsers } = require("./controller/usercontroller");

const app = express();

app.set("view engine", "ejs");

app.get("/user", handleUsers);

app.listen(3200, () => {
    console.log("Server Running");
});