import React, { Component } from "react";

const PostFeed = (props) => {
  const { postData, RemovePost } = props;
  const postList = postData.map((post) => (
    <div className="card" key={post.id}>
      <div className="card-body">
        <b className="lead">{post.postTitle}</b>
        <br />
        <b className="text-primary">{post.postUser}</b>
        <div className="post-content">{post.postContent}</div>
        <span>
          <b>Replies:</b> {post.postReplies}{" "}
        </span>
        <span>
          <b>Reposts:</b> {post.postReposts}{" "}
        </span>
        <span>
          <b>Likes:</b> {post.postLikes}{" "}
        </span>
        <br />
        Post ID: {post.id}
        <br />
        <button
          className="btn btn-outline-primary"
          onClick={() => RemovePost(post.id)}
        >
          Delete
        </button>
      </div>
    </div>
  ));

  return <div className=" post-card">{postList}</div>;
};

export default PostFeed;
