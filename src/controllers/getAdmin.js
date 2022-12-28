const Admin = require("../models/admin");

const getAdmin = async (req, res) => {
  const body = req.body;
  const admin = await Admin.find({}).exec();

  res.json(admin);
};

module.exports = getAdmin;
