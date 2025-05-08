const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const pool = require("../db/Pool");
const passport = require("passport");

router.post("/sign-up", async (req, res, next) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  try {
    await pool.query("INSERT INTO users (username, password) VALUES ($1, $2)", [
      req.body.username,
      hashedPassword,
    ]);
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    return next(err);
  }
});

router.post(
  "/log-in",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/",
  })
);

router.get("/log-out", (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    res.redirect("/");
  });
});

router.get("/", (req, res) => {
  res.render("index", { user: req.user });
});

module.exports = router;
