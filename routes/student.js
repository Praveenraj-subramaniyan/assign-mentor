var express = require("express");
var router = express.Router();
const Student = require("../Models/StudentDetails");
const Mentor = require("../Models/MentorDetails");

router.post("/create", async (req, res) => {
  const { name } = req.body;
  try {
    const newStudent = new Student({ name: name });
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to create student." });
  }
});

router.post("/assign-mentor/:studentId", async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const { mentorId } = req.body;

    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ message: "Student not found." });
    }

    const mentor = await Mentor.findById(mentorId);
    if (!mentor) {
      return res.status(404).json({ message: "Mentor not found." });
    }
    if (student.mentor) {
         student.PreviousMentor.push(student.mentor);
    }
    student.mentor = {
      id: mentor._id,
      name: mentor.name,
    };
    await student.save();
    res.status(200).json({ message: "Mentor assigned successfully." });
  } catch (err) {
    res.status(500).json({ message: "Failed to assign mentor to student." });
  }
});

router.get("/previous-mentor/:studentId", async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ message: "Student not found." });
    }
    const previousMentor = student.PreviousMentor;
    res.status(200).json(previousMentor);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch data." });
  }
});

module.exports = router;
