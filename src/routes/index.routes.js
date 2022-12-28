const express = require("express");
const addProject = require("../controllers/addProject");
const registerUser = require("../controllers/registerUser");
const SendDonation = require("../controllers/SendDonation");
const adminSignin = require("../controllers/adminSignin");

const router = express.Router();

router.post("/registration", registerUser);
router.post("/addProject", addProject);
router.post("/SendDonation", SendDonation);
router.post("/adminSignin", adminSignin);

module.exports = router;
