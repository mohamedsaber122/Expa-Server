const express = require("express");
const addProject = require("../controllers/addProject");
const registerUser = require("../controllers/registerUser");
const SendDonation = require("../controllers/SendDonation");
const adminSignin = require("../controllers/adminSignin");
const getProject = require("../controllers/getProject");
const getUser = require("../controllers/getUser");
const getAdmin = require("../controllers/getAdmin");
const getUsersignin = require("../controllers/getUsersignin");

const router = express.Router();

router.post("/registration", registerUser);
router.post("/addProject", addProject);
router.post("/SendDonation", SendDonation);
router.post("/adminSignin", adminSignin);
router.post("/getProject", getProject);
router.post("/getUser", getUser);
router.post("/getAdmin", getAdmin);
router.post("/getUsersignin", getUsersignin);

module.exports = router;
