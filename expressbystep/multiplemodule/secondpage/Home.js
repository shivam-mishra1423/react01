const express = require("express");
const router = express.Router();

const data = [
    {
        name: "Rohan",
        age: 28
    }
];

router.get("/", (req, res) => {
    res.send(data);
});

module.exports = router;