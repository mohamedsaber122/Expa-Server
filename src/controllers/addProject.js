const Project = require("../models/project");

// Async function that adds a new project to the database
const addProject = async (req, res) => {
  // Get the request body
  const body = req.body;
  // Create a new Project document using the request body
  const newProject = new Project({
    ProjectName: body.ProjectName,
    ProjectDescription: body.ProjectDescription,
    ProjectFees: body.ProjectFees,
    ProjectDate: body.ProjectDate,
    // Set the timestamp field to the current date and time
    timestamp: new Date(),
    country: body.country,
  });
  // Save the new document to the Project collection in the database
  await newProject.save();
  // Send a response with a success message
  res.send("Project Added");
};

// Export the addProject function
module.exports = addProject;
