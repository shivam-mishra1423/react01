const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const cors = require("cors");

const connectDB = require("./config/db");

const AuthRoute = require("./routes/AuthRoutes");
const ContactRoutes = require("./routes/ContactRoutes");

const app = express();

connectDB();

//middleware
app.use(cors());
app.use(express.json());

//routes
app.use("/api/auth", AuthRoute);
app.use("/api/contacts", ContactRoutes);

app.get("/", (req, res) => {
    res.end("testing server");
});

app.listen(3005);
console.log("server running");