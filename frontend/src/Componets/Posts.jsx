import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
function Posts() {
  const { club_id } = useParams();

  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/clubs/posts/${club_id}`,
          {
            method: "GET",
            credentials: "include",
          }
        );
        const result = await response.json();
        if (!result || result.length === 0) {
          setPosts([]);
        } else {
          setPosts(result);
          console.log(result);
        }
      } catch (e) {
        console.log("ERROR IN FETCHING: ", e);
      }
    };

    fetchData();
  }, [club_id]);
  const handleLogout = async () => {
    try {
      await fetch("http://localhost:3000/log-out", {
        method: "GET",
        credentials: "include",
      });
      localStorage.removeItem("token");
      navigate("/Login");
    } catch (e) {
      console.log("ERROR IN Log out: ", e);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center h-2">
      <div>Hello world</div>
      <div className="posthead header">
        {" "}
        USER POSTS
        {posts.length === 0 ? (
          <div>
            <div className="noPosts">No posts in the database</div>
          </div>
        ) : (
          posts.map((post) => <div key={post.id}>{post.title}</div>)
        )}
      </div>
      <button className="btn-accent" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Posts;
