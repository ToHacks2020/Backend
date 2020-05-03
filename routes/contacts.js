const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");
const User = require("../models/User");
const Contact = require("../models/Contact");

// @route Get api/contacts
// @desc Register a user
// @access Public

router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (error) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

// @route Post api/contacts
// @desc Add new contact
// @access Private

router.post("/", (req, res) => {
  res.send("Add contact");
});

// @route PUT api/contacts/:id
// @desc Update a contact
// @access private

router.put("/:id", (req, res) => {
  res.send("Update contact");
});

// @route DELETE api/contacts/:id
// @desc Delete contact
// @access private

router.delete("/:id", (req, res) => {
  res.send("Delete contact");
});

module.exports = router;
