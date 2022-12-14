const express = require("express");
const router = express.Router();

const{ register, login,dashboard, isAuthuser, logout, updatePassword, updateProfile }= require('../controllers/auth');
const { authorizeCreditCard } = require("../payment/payment");
router.route("/register").post(register,authorizeCreditCard);

router.route("/login").post(login);

router.route("/me").get(isAuthuser,dashboard);
router.route("/logout").get(logout);
router.route("/update/password").put(isAuthuser, updatePassword);
router.route("/update/profile").put(isAuthuser, updateProfile);
// router.router('/createorder',).get( )

// router.route("/resetpassword/:resetToken").put(resetPassword);

// router.route("/dashboard").post(isAuthuser,dashboard)


module.exports=router