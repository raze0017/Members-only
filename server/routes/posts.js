const express = require("express");
const router = express.Router();

const posts = [
  { username: "john", title: "post 1" },
  { username: "jim", title: "post 2" },
];

router.get("/", (req, res) => {
  res.json(posts);
});

module.exports = router;
