const express = require("express");
const { createStudent } = require("../controllers/studentController");

const router = express.Router();

router.post("/student", createStudent);

module.exports = router;