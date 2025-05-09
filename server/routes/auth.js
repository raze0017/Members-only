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

router.post("/log-in", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    req.login(user, (err) => {
      if (err) return next(err);
      return res.status(200).json({ message: "Login successful", user });
    });
  })(req, res, next); // <-- Don't forget to immediately call the middleware with req, res, next
});

router.get("/log-out", (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err); // ✅ now "next" is in scope
    }
    res.json({ message: "Logged out successfully" }); // or res.redirect("/")
  });
});

router.get("/", (req, res) => {
  res.render("index", { user: req.user });
});

module.exports = router;
