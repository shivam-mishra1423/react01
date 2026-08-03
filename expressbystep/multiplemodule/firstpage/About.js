const express = require("express");
const router = express.Router();

const data = [
    {
        city: "Delhi"
    }
];

router.get("/", (req, res) => {
    res.send(data);
});

module.exports = router;