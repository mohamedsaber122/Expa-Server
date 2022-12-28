const admin = require("../models/admin");

const adminSignin = async (req, res) => {
  const body = req.body;
  const newAdmin = new admin({
    email: body.email,
    password: body.password,
  });
  await newAdmin.save();
  res.send("Admin signin !");
};

module.exports = adminSignin;
