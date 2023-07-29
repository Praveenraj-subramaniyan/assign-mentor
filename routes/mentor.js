var express = require('express');
var router = express.Router();
const Mentor = require("../Models/MentorDetails");

router.post("/create", async (req, res) => {
    try {
        const { name } = req.body;
        const newMentor = new Mentor({ name });
        await newMentor.save();
        res.status(201).json(newMentor);
      } catch (err) {
        res.status(500).json({ message: 'Failed to create mentor.' });
      }
});


module.exports = router;