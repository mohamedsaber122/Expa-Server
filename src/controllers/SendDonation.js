const Donation = require("../models/donation");

const SendDonation = async (req, res) => {
  const body = req.body;
  const newDonation = new Donation({
    name: body.name,
    email: body.email,
    phoneNumber: body.phoneNumber,
    amount: body.amount,
  });
  await newDonation.save();
  res.send("Donation Added");
};

module.exports = SendDonation;
