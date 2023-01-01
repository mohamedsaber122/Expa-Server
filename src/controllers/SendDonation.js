const Donation = require("../models/donation");

// Async function that saves a new donation to the database
const SendDonation = async (req, res) => {
  // Get the request body
  const body = req.body;
  // Create a new Donation document using the request body
  const newDonation = new Donation({
    name: body.name,
    email: body.email,
    phoneNumber: body.phoneNumber,
    amount: body.amount,
  });
  // Save the new document to the Donation collection in the database
  await newDonation.save();
  // Send a response with a success message
  res.send("Donation Added");
};

// Export the SendDonation function
module.exports = SendDonation;
