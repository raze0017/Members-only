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
  const author = localStorage.getItem("token");

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
    if (response.ok) {
      const newPost = await response.json(); // backend returns the new post
      setFormData({
        title: "",
        content: "",
      });
      console.log(newPost);
      setPosts((prevPosts) => [newPost, ...prevPosts]);
    } else {
      console.log("server error");
    }
  };
  const [editingPostId, setEditingPostId] = useState(-1);
  const [editedPostData, setEditedPostData] = useState({
    title: "",
    content: "",
  });
  const handleEdit = async (postId, title, content) => {
    const sendData = {
      postId,
      title,
      content,
    };
    console.log(sendData);
    const response = await fetch("http://localhost:3000/clubs/posts", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(sendData),
      credentials: "include",
    });
    if (response.ok) {
      console.log("edited post data");
      setEditingPostId(-1);
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id == postId ? { ...post, title: title, content: content } : post
        )
      );
    } else {
      console.log("Error occured in editing");
    }
  };
  const handleDelete = async (post_Id) => {
    const postId = post_Id;
    const response = await fetch(
      `http://localhost:3000/clubs/posts/${postId}`,
      {
        method: "DELETE",
        credentials: "include",
      }
    );
    if (response.ok) {
      console.log("Deleting successfull");
      setPosts((prevPosts) => prevPosts.filter((post) => post.id != postId));
    } else {
      console.log("Error in deleting");
    }
  };
  return (
    <div className="w-full px-4">
      <div className="flex flex-col w-full">
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn btn-accent"
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
                  rows={10}
                  onChange={(e) => {
                    setFormData({ ...formData, content: e.target.value });
                  }}
                />
              </label>

              <input type="submit" className="btn btn-primary flex flex-col" />
            </form>

            <div className="modal-action">
              {" "}
              <button
                className="btn"
                onClick={() => document.getElementById("my_modal_1").close()}
              >
                Close
              </button>{" "}
            </div>
          </div>
        </dialog>
        <div className="posthead header w-full mb-4 text-xl font-bold ">
          USER POSTS
        </div>

        {posts.length === 0 ? (
          <div className="noPosts text-center">No posts in the database</div>
        ) : (
          posts.map((post) =>
            editingPostId == post.id ? (
              <form
                className="card bg-base-200 w-full max-w-4xl shadow-xl mb-4 mx-auto"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleEdit(
                    post.id,
                    editedPostData.title,
                    editedPostData.content
                  );
                }}
              >
                <div className="card-body w-full">
                  <label className="label username flex flex-col">
                    Title
                    <input
                      type="text"
                      name="title"
                      value={editedPostData.title}
                      className="input w-full" // 🔄 removed min-w-[1000px]
                      onChange={(e) =>
                        setEditedPostData({
                          ...editedPostData,
                          title: e.target.value,
                        })
                      }
                    />
                  </label>
                  <label className="flex flex-col label">
                    Content
                    <textarea
                      type="text"
                      name="content"
                      value={editedPostData.content}
                      className="textarea w-full min-h-[150px] resize-y" // 🔄 removed min-w
                      placeholder="Write your blog here"
                      onChange={(e) => {
                        setEditedPostData({
                          ...editedPostData,
                          content: e.target.value,
                        });
                      }}
                    />
                  </label>

                  <div className="flex flex-row flex-wrap items-center justify-center gap-4">
                    <button
                      type="button"
                      className="btn btn-accent"
                      onClick={() => setEditingPostId(-1)}
                    >
                      Cancel
                    </button>
                    <input type="submit" className="btn btn-primary" />
                  </div>
                </div>
              </form>
            ) : (
              <div
                className="card bg-base-200 max-w-auto shadow-xl mb-4"
                key={post.id}
              >
                <div className="card-body w-full">
                  <div className="card-title">{post.title}</div>
                  <div className="postContent">{post.content}</div>
                  <div className="createdBy">Author: {post.username}</div>
                  <div className="createdAt">
                    {post.created_at
                      ? post.created_at.slice(0, 10)
                      : "Unknown date"}
                  </div>
                </div>
                {post.author_id == author ? (
                  <div className="flex flex-row justify-end gap-5 ">
                    {" "}
                    <button
                      onClick={() => {
                        setEditingPostId(post.id);
                        setEditedPostData({
                          ...editedPostData,
                          title: post.title,
                          content: post.content,
                        });
                        console.log("Editing post id is:", editingPostId);
                      }}
                      className="edit  btn btn-secondary"
                    >
                      Edit
                    </button>
                    <button
                      className="delete btn btn-error"
                      onClick={() => {
                        console.log("deleting post id is", post.id);
                        handleDelete(post.id);
                      }}
                    >
                      delete
                    </button>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            )
          )
        )}
      </div>
    </div>
  );
}

export default Posts;
