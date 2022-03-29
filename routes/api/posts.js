const express = require("express");
const { route } = require("express/lib/router");
const router = express.Router();

// @route   GET api/posts
// @desc    Test route
// @access  Public
router.get("/", (req, res) => res.send("Posts route"));

module.exports = router;
