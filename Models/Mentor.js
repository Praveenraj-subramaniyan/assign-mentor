const mongoose = require("mongoose");

const MentorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { collection: "Mentor" }
);

const MentorDetails = mongoose.model("Moogoose", MentorSchema);

module.exports = MentorDetails;
