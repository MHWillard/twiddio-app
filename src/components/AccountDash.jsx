import React, { Component } from "react";
import UserName from "./UserName";

const AccountDash = (props) => {
  const {
    currentUserName,
    EditNameStatus,
    ToggleEditName,
    AddNewUserName,
    UserNameChange,
  } = props;

  return (
    <div>
      <div className="card">
        <div className="card-body account-dash">
          <div className="account-stats">
            <img
              src={process.env.PUBLIC_URL + "/empty.jpg"}
              width="100"
              height="100"
              alt="empty"
            />
            <span className="account-username">
              <UserName
                currentUserName={currentUserName}
                EditNameStatus={EditNameStatus}
                ToggleEditName={ToggleEditName}
                AddNewUserName={AddNewUserName}
                UserNameChange={UserNameChange}
              />
            </span>
          </div>
          <div>
            <p className="lead">
              <b>Posts:</b> 100 | <b>Followers:</b> 1000 | <b>Following:</b> 5
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDash;
