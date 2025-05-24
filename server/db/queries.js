// db/queries.js
const pool = require("./Pool");

const getPosts = async (club_id) => {
  try {
    console.log("Fetching posts for club_id:", club_id);

    const result = await pool.query(
      "SELECT p.id,p.title, p.content, p.created_at, (select username from users where id=p.author_id) as username,p.author_id FROM posts p where club_id=$1 order by p.id desc",
      [club_id]
    );
    console.log(result.rows);
    return result.rows;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw new Error("Failed to fetch posts from the database");
  }
};
const postPosts = async (title, content, created_at, author_id, club_id) => {
  try {
    const result = await pool.query(
      `WITH inserted AS (
         INSERT INTO posts(title, content, created_at, author_id, club_id)
         VALUES ($1, $2, $3, $4, $5)
         RETURNING *
       )
       SELECT inserted.*, u.username
       FROM inserted
       JOIN users u ON inserted.author_id = u.id`,
      [title, content, created_at, author_id, club_id]
    );

    return result.rows;
  } catch (error) {
    console.error("error in posting in the database, query error", error);
    throw new Error("failed to post in database:", error);
  }
};
const getClubs = async () => {
  try {
    const result = await pool.query("select name,id from clubs;");
    return result.rows;
  } catch (error) {
    console.error("ERROR querying clubs: ", error);
    throw new Error("Failed to fetch clubs from database:", error);
  }
};
const getJoined = async (user_Id) => {
  try {
    const result = await pool.query(
      "SELECT club_id FROM users_clubs WHERE user_id = $1",
      [user_Id]
    );
    return result.rows;
  } catch (error) {
    console.error("Error querying joined clubs: ", error);
    throw new Error("Failed to fetch joined clubs from database");
  }
};
const jointables = async (user_id, clubId) => {
  try {
    await pool.query(
      "INSERT INTO users_clubs (user_id, club_id) VALUES ($1, $2)",
      [user_id, clubId]
    );
  } catch (error) {
    console.log("Error during adding data! ", error);
    throw new Error("Failed to join user wit club: ");
  }
};
const putPosts = async (postId, title, content) => {
  try {
    await pool.query("UPDATE posts set title=$1, content=$2 where id=$3", [
      title,
      content,
      postId,
    ]);
  } catch (error) {
    console.error("error in updating the database, query error:", error);
    throw new Error("Failed to edit the column");
  }
};

module.exports = {
  getPosts,
  getClubs,
  jointables,
  getJoined,
  postPosts,
  putPosts,
};
