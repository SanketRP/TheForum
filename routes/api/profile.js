const express = require("express");
const { route } = require("express/lib/router");
const router = express.Router();

// @route   GET api/profile
// @desc    Test route
// @access  Public
router.get("/", (req, res) => res.send("Profile route"));

module.exports = router;
