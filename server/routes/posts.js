const express = require("express");
const router = express.Router();
const getstuff = require("../db/queries.js");
router.get("/", async (req, res) => {
  try {
    const user_Id = req.query.user_Id;
    const clubs = await getstuff.getClubs();
    const joined = await getstuff.getJoined(user_Id);
    res.json({ clubs, joined });
  } catch (error) {
    res.status(500).json({ e: "ERROR In fetching clubs" });
  }
});
router.get("/posts/:id", async (req, res) => {
  try {
    const club_id = req.params.id;
    const posts = await getstuff.getPosts(club_id);
    res.json(posts);
  } catch (e) {
    res.status(500).json({ e: "error in fetching posts" });
  }
});
router.post("/join", async (req, res) => {
  try {
    const { user_id, clubId } = req.body;
    await getstuff.jointables(user_id, clubId);
    res.status(200).send("Successfully joined the user");
  } catch (error) {
    console.error("Error in /join route:", error);
    res.status(500).send("Internal Server Error");
  }
});
module.exports = router;
