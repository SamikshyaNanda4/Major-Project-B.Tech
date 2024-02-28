const express = require("express");
const { genetrateOTPSignup, signUp, generateOtpForgotonPassword, logIn, resetPassword } = require("../controller/auth-controllers");
const authRoutes = express.Router();

authRoutes.route("/otp/signup").post(genetrateOTPSignup);
authRoutes.route("/signup").post(signUp);
authRoutes.route("/otp/forgotpassword").post(generateOtpForgotonPassword);
authRoutes.route("/login").post(logIn);
authRoutes.route("/resetpassword").post(resetPassword);

module.exports = authRoutes;