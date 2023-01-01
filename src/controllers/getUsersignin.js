const Volunteer = require("../models/volunteer");

// Async function that gets all volunteers' email and password from the database
const getUsersignin = async (req, res) => {
  // Get the request body
  const body = req.body;
  // Find all documents in the Volunteer collection
  // Only include the email and password fields in the returned documents
  const volunteer = await Volunteer.find({}, { email: 1, password: 1 }).exec();

  // Send the array of documents as a JSON response
  res.json(volunteer);
};

// Export the getUsersignin function
module.exports = getUsersignin;
