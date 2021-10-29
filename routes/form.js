const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const bcrypt = require("bcryptjs");
const passport = require("passport");

router.post("/data", (req, res) => {
  const {
    phone,
    ref,
    style,
    dot,
    dd,
    color,
    fabric,
    dpayment,
    tpayment,
    check,
    receipt,
    shoulder,
    shoulderWaist,
    bust,
    waist,
    waistHip,
    waistLength,
    neckOpening,
    sleeve,
    cuff,
    hip,
    textarea,
  } = req.body;

  let errors = [];

  // Check required fields
  if (
    !phone ||
    !ref ||
    !style ||
    !dot ||
    !dd ||
    !color ||
    !fabric ||
    !dpayment ||
    !tpayment ||
    !check ||
    !receipt ||
    !shoulder ||
    !shoulderWaist ||
    !bust ||
    !waist ||
    !waistHip ||
    !waistLength ||
    !neckOpening ||
    !sleeve ||
    !cuff ||
    !hip ||
    !textarea
  ) {
    errors.push({ msg: "Please fill in all fields" });
  }

  if (errors.length > 0) {
    global.check = false;
    res.render("dashboard", {
      errors,
      phone,
      ref,
      style,
      dot,
      dd,
      color,
      fabric,
      dpayment,
      tpayment,
      check,
      receipt,
      shoulder,
      shoulderWaist,
      bust,
      waist,
      waistHip,
      waistLength,
      neckOpening,
      sleeve,
      cuff,
      hip,
      textarea,
    });
  }

  //   res.redirect("/dashboar");
});

module.exports = router;
