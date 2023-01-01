const Volunteer = require("../models/volunteer");

const getUsersignin = async (req, res) => {
  const body = req.body;
  const volunteer = await Volunteer.find({}, { email: 1, password: 1 }).exec();

  res.json(volunteer);
};

module.exports = getUsersignin;
