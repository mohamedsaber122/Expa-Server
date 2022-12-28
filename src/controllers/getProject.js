const Project=require("../models/project");

const getProject= async (req,res)=>{
const body=req.body;
const project = await Project.find({ ProjectName: body , ProjectDescription: body , ProjectFees: body ,ProjectDate: body , Country: body  }).exec();
res.json(project);
}

module.exports=getProject;