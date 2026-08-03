const express = require("express");
const router = express.Router();

const data = [
    {
        name: "Shivam",
        age: 25
    }
];

router.get("/", (req, res) => {
    res.send(data);
});

module.exports = router;