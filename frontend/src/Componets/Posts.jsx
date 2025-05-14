import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
function Posts() {
  const { club_id } = useParams();

  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("The club Id we fetching,", club_id);
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
    <div className="w-full px-4">
      <div className="flex flex-col w-full">
        <div className="posthead header w-full mb-4 text-xl font-bold">
          USER POSTS
        </div>
        {posts.length === 0 ? (
          <div className="noPosts text-center">No posts in the database</div>
        ) : (
          posts.map((post) => (
            <div
              className="card bg-base-100 max-w-auto shadow-xl mb-4"
              key={post.id}
            >
              <div className="card-body w-full">
                <div className="card-title">{post.title}</div>
                <div className="postContent">{post.content}</div>
                <div className="createdBy">Author: {post.username}</div>
                <div className="createdAt">{post.created_at.slice(0, 10)}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Posts;
