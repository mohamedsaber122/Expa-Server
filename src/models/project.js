const mongoose = require("mongoose");


const ProjectSchema = new mongoose.Schema({
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
    Country: {
        type: String,
        required:true
    },
    // ProjectDate: {
    //     type: String,
    //     required:true
    // }
});

module.exports = mongoose.model("Project", ProjectSchema);