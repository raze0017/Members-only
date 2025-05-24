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
router.post("/posts", async (req, res) => {
  try {
    const { title, content, created_at, author_id, club_id } = req.body;
    const posts = await getstuff.postPosts(
      title,
      content,
      created_at,
      author_id,
      club_id
    );
    console.log("Created post:", posts);

    res.status(200).json(posts[0]);
  } catch (error) {
    console.error("error in posting");
    res.status(500).send("Internal server error");
  }
});
router.put("/posts", async (req, res) => {
  try {
    const { postId, title, content } = req.body;
    const response = await getstuff.putPosts(postId, title, content);
    console.log("successfully updated post");
    res.status(200).send("success");
  } catch (error) {
    console.error("Error in database update:", error);

    res.status(500).send("internal server error");
  }
});
router.delete("/posts/:id", async (req, res) => {
  try {
    const postId = req.params.id;
    const response = await getstuff.deletePost(postId);
    console.log("Successfully deleted post");
    res.status(200).send("success");
  } catch (error) {
    console.error("error in deleting,", error);
    res.status(500).send("internal server error");
  }
});
module.exports = router;
