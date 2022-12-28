const mongoose = require("mongoose");


const projectSchema = new mongoose.Schema({
    ProjectName: {
        type: String,
        required: true,
    },
    ProjectDescription: {
        type: String,
        required:true
    },
    ProjectFees:{
      type:String,
      required:true
    },

    ProjectDate: {
        type: Date,
        required:true
    },
    country: {
        type: String,
        required:true
    },
  
});

module.exports = mongoose.model("Project", projectSchema);