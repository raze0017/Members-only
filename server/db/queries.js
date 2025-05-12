// db/queries.js
const pool = require("./Pool");

const getPosts = async (club_id) => {
  try {
    const result = await pool.query(
      "SELECT p.title, p.content, p.created_at, (select username from users where id=p.author_id) as username FROM posts p where club_id=$1",
      [club_id]
    );
    return result.rows;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw new Error("Failed to fetch posts from the database");
  }
};
const getClubs = async () => {
  try {
    const result = await pool.query("select name,id from clubs;");
    return result.rows;
  } catch (error) {
    console.error("ERROR querying clubs: ", error);
    throw new Error("Failed to fetch clubs from database");
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

module.exports = { getPosts, getClubs, jointables, getJoined };
