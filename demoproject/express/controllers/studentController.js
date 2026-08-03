const Student = require("../models/Student");

const createStudent = async (req, res) => {
  try {
    const { name, email, age } = req.body;

    const student = new Student({
      name,
      email,
      age,
    });

    await student.save();

    res.status(201).json({
      success: true,
      message: "Student Added Successfully",
      student,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createStudent,
};