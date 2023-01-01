const Volunteer = require("../models/volunteer");

// Async function that registers a new volunteer user
const registerUser = async (req, res) => {
  // Get the request body
  const body = req.body;
  // Create a new Volunteer document using the request body
  const newVolunteer = new Volunteer({
    name: body.name,
    email: body.email,
    phoneNumber: body.phoneNumber,
    password: body.password,
    country: body.country,
    role: body.role,
  });
  // Save the new document to the Volunteer collection in the database
  await newVolunteer.save();
  // Send a response with a success message
  res.send("New User Saved!");
};

// Export the registerUser function
module.exports = registerUser;
