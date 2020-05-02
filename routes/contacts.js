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
