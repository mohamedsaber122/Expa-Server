const Volunteer=require("../models/volunteer");

const registerUser= async(req,res)=>{
    const body=req.body;
    const newVolunteer = new Volunteer({
        name: body.name,
        email: body.email,
        phoneNumber: body.phoneNumber,
        password: body.password,
        country: body.country,
        role:body.role,
    });
    await newVolunteer.save();
    res.send('New User Saved!');
}

module.exports=registerUser;