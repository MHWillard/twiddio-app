import React, { Component } from "react";

const AddPost = (props) => {
  const { PostContent, PostTitle, TitleChange, ContentChange, AddPost } = props;

  let pLength = PostContent.length;
  let pTitle = PostTitle.length;

  //change length var classes based on threshold

  return (
    <div className="card">
      <div className="card-body post-field">
        <h4 className="text-secondary">What's going on?</h4>
        <h6>
          Remember, posts can be up to 300 characters with a title up to 100
          characters.
        </h6>
        <form>
          <input
            className="inputTitle"
            type="text"
            id="inputTitle"
            name="inputTitle"
            value={PostTitle}
            onChange={TitleChange}
          />{" "}
          <span>{pTitle}</span>
          <br />
          <textarea
            className="inputContent"
            type="text"
            id="inputContent"
            name="inputContent"
            value={PostContent}
            onChange={ContentChange}
          />{" "}
          <span>{pLength}</span>
          <br />
          <button className="btn btn-outline-primary" onClick={AddPost}>
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
