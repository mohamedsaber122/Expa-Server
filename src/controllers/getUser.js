const Volunteer = require("../models/volunteer");

// Async function that gets all volunteers from the database except for admins
const getUser = async (req, res) => {
  // Get the request body
  const body = req.body;
  // Find all documents in the Volunteer collection where the role is not "admin"
  // Only include the name, phoneNumber, and email fields in the returned documents
  const volunteer = await Volunteer.find(
    { role: { $ne: "admin" } },
    { name: 1, phoneNumber: 1, email: 1 }
  ).exec();

  // Send the array of documents as a JSON response
  res.json(volunteer);
};

// Export the getUser function
module.exports = getUser;
