const { project } = require("../models/project");
const Project = require("../models/project");

const getProject = async (req, res) => {
  const body = req.body;
  const project = await Project.find({}).exec();

  res.json(project);
};

module.exports = getProject;
