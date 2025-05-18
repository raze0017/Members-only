import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
function Posts() {
  const { club_id } = useParams();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });
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
  const handleSubmit = async () => {
    const created_at = new Date();
    const author_id = localStorage.getItem("token");
    const sendData = { ...formData, created_at, author_id, club_id };
    const response = await fetch(`http://localhost:3000/clubs/posts/`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(sendData),
      credentials: "include",
    });
    if (response) {
      const newPost = await response.json(); // backend returns the new post
      setPosts((prevPosts) => [newPost, ...prevPosts]);
    } else {
      console.log("server error");
    }
  };
  return (
    <div className="w-full px-4">
      <div className="flex flex-col w-full">
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Create a new Post
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Create Post</h3>
            <form
              method="dialog"
              className="flex flex-col"
              onSubmit={handleSubmit}
            >
              <label className="label username flex flex-col">
                Title
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  className="input"
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                />
              </label>
              <label className="flex flex-col label">
                Content
                <textarea
                  type="text"
                  name="content"
                  value={formData.content}
                  className="textarea min-w-[250px] min-h-[250px] resize-y"
                  placeholder="Write your blog here"
                  onChange={(e) => {
                    setFormData({ ...formData, content: e.target.value });
                  }}
                />
              </label>

              <input type="submit" className="btn-secondary flex flex-col" />
            </form>
            <div className="modal-action">
              {" "}
              <button className="btn">close</button>
            </div>
          </div>
        </dialog>
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
