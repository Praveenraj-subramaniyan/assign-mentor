var express = require("express");
var router = express.Router();
const Student = require("../Models/StudentDetails");

router.post("/create", async (req, res) => {
    try {
        const { name } = req.body;
        const newStudent = new Student({ name });
        await newStudent.save();
        res.status(201).json(newStudent);
      } catch (err) {
        res.status(500).json({ message: 'Failed to create student.' });
      }
});

module.exports = router;
