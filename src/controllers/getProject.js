const Project = require("../models/project");

// Async function that gets all projects from the database
const getProject = async (req, res) => {
  // Get the request body
  const body = req.body;
  // Find all documents in the Project collection
  const project = await Project.find({}).exec();

  // Send the array of documents as a JSON response
  res.json(project);
};

// Export the getProject function
module.exports = getProject;
