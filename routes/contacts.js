const express = require("express");
const router = express.Router();

// @route Get api/contacts
// @desc Register a user
// @access Public

router.get("/", (req, res) => {
  res.send("Get all contacts");
});

// @route Post api/contacts
// @desc Add new contact
// @access Private

router.get("/", (req, res) => {
  res.send("Get all contacts");
});

module.exports = router;
