import React, { Component } from "react";

const UserName = (props) => {
  const {
    currentUserName,
    EditNameStatus,
    ToggleEditName,
    UserNameChange,
    AddNewUserName,
  } = props;
  if (EditNameStatus) {
    return (
      <span>
        <input onChange={UserNameChange}></input>{" "}
        <button className="btn btn-outline-primary" onClick={AddNewUserName}>
          Submit
        </button>
      </span>
    );
  } else {
    return (
      <span>
        <span className="lead account-username">{currentUserName}</span>{" "}
        <button className="btn btn-outline-primary" onClick={ToggleEditName}>
          Edit
        </button>
      </span>
    );
  }
};

export default UserName;
