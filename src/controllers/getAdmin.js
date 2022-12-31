const Volunteer = require("../models/volunteer");

const getAdmin = async (req, res) => {
  const body = req.body;
  const email = body.email;
  const password = body.password;

  try {
    // Find the user with the specified email and password
    const users = await Volunteer.find({ email: email, password: password }).exec();
    if (!users.length) {
      // Return an error if the user is not found
      return res.status(404).send({ error: "User not found" });
    }

    // Check the user's role field to determine their status
    const user = users[0];
    if (user.role === "admin") {
      res.send({ status: "admin" });
    } else {
      res.send({ status: "user" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "An error occurred while retrieving the user" });
  }
};

module.exports = getAdmin;