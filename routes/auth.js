const express = require("express");
const router = express.Router();

// @route GET api/users
// @desc Get logged in user
// @access Private

router.post("/", (req, res) => {
  res.send("Register a user");
});

// @route POST api/users
// @desc Auth user and get token
// @access Public

router.post("/", (req, res) => {
  res.send("Login User");
});

module.exports = router;
