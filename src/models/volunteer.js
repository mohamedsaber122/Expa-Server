const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required:true
    },
    phoneNumber:{
      type:String,
      required:true
    },
    password: {
        type: String,
        required:true
    },
    country:{
        type:String,
        required:true
      },
});

module.exports = mongoose.model("Volunteer", userSchema);