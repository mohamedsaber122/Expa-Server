const express = require("express");
const addProject = require("../controllers/addProject");
const registerUser = require("../controllers/registerUser");
const SendDonation = require("../controllers/SendDonation");


const router = express.Router();

router.post("/registration", registerUser);
router.post("/addProject", addProject);
router.post("/SendDonation", SendDonation);




module.exports=router;