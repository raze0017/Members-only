const express = require("express");
const router = express.Router();

const posts = [
  { id: 0, username: "john", title: "post 1" },
  { id: 1, username: "jim", title: "post 2" },
];

router.get("/", (req, res) => {
  res.json(posts);
});

module.exports = router;
