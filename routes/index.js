const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth");
// Login Page
router.get("/", (req, res) => res.render("login"));

// Dashboard Page
router.get("/dashboard", ensureAuthenticated, (req, res) =>
  res.render("dashboard", {
    name: req.user.name,
  })
);

module.exports = router;
