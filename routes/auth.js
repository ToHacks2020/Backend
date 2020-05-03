const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("config");

// @route GET api/users
// @desc Get logged in user
// @access Private

router.get("/", (req, res) => {
  res.send("Get logged in user");
});

// @route POST api/users
// @desc Auth user and get token
// @access Public

router.post("/", (req, res) => {
  res.send("Login User");
});

module.exports = router;
