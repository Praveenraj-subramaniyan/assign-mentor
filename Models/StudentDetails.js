const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    mentor: {
      id: String,
      name: String,
    },
    PreviousMentor: [
      {
        id: String,
        name: String,
      },
    ],
  },
  { collection: "Student" }
);

const StudentDetails = mongoose.model("Student", StudentSchema);

module.exports = StudentDetails;
