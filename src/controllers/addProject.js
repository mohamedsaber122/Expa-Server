const Project=require("../models/project");

const addProject = async(req,res)=>{
    const body=req.body;
    const newProject = new Project({
        ProjectName: body.ProjectName,
        ProjectDescription: body.ProjectDescription,
        ProjectFees: body.ProjectFees,
        ProjectDate:body.ProjectDate,
        timestamp:new Date(),
        country: body.country,
      

        
    });
    await newProject.save();
    res.send('Project Added');
}

module.exports=addProject;