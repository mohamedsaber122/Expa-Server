const Volunteer = require("../models/volunteer");

const getUser = async (req, res) => {
  const body = req.body;
  const volunteer = await Volunteer.find(
    { role: { $ne: "admin" } },
    { name: 1, phoneNumber: 1, email: 1 }
  ).exec();

  res.json(volunteer);
};

module.exports = getUser;
