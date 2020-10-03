import React, { Component } from "react";
//import logo from './logo.svg';
//import './App.css';
import Header from "./components/Header";
import AccountDash from "./components/AccountDash";
import AddPost from "./components/AddPost";
import PostFeed from "./components/PostFeed";
import posts from "./services/posts.json";
import Intro from "./components/Intro";

class App extends Component {
  //state
  constructor(props) {
    super(props);
    this.state = {
      postData: [],
      userPostTitle: "",
      userPostContent: "",
      userName: "Username",
      tempName: "",
      overCharLimit: false,
      currentlyEditingName: false,
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.addPost = this.addPost.bind(this);
    this.handleAddPost = this.handleAddPost.bind(this);
    this.toggleCharLimit = this.toggleCharLimit.bind(this);
    this.toggleEditName = this.toggleEditName.bind(this);
    this.addNewUserName = this.addNewUserName.bind(this);
    this.removePost = this.removePost.bind(this);
  }

  componentDidMount() {
    this.setState({ postData: posts.posts });
  }

  handleTitleChange(event) {
    this.setState({ userPostTitle: event.target.value });
  }

  handleContentChange(event) {
    this.setState({ userPostContent: event.target.value });
  }

  handleUserNameChange(event) {
    this.setState({ tempName: event.target.value });
  }

  //if called, takes the previous state and sets overCharLimit to equal the OPPOSITE of the previous state's OverCharLimit. Since it's a boolean, it flips it.
  toggleCharLimit() {
    this.setState((prevState) => ({ overCharLimit: !prevState.overCharLimit }));
  }

  toggleEditName() {
    this.setState((prevState) => ({
      currentlyEditingName: !prevState.currentlyEditingName,
    }));
    console.log(this.state.currentlyEditingName);
  }

  addPost() {
    //create object of new post data
    //push to index 0 of postData and set that state
    let newID = "_" + Math.random().toString(36).substr(2, 9);
    let newPost = {
      id: newID,
      postUser: this.state.userName,
      postTitle: this.state.userPostTitle,
      postContent: this.state.userPostContent,
      postCharLength: this.state.userPostContent.length,
      postReplies: 0,
      postReposts: 0,
      postLikes: 0,
    };

    this.setState((prevState) => ({
      postData: [newPost, ...prevState.postData],
    }));

    console.log(newID);
  }

  removePost(id) {
    const newList = this.state.postData.filter((post) => post.id !== id);
    console.log(newList);
    this.setState({ postData: newList });
  }

  addNewUserName() {
    let tempName = this.state.tempName;
    //console.log(tempName);
    //this.setState((prevState) => ({
    //userName: [this.state.tempName, ...prevState.userName],
    //}));
    this.setState({ userName: tempName });
    this.toggleEditName();
  }

  handleAddPost(event) {
    //runs AddPost when click is detected for post button
    event.preventDefault();
    if (
      this.state.userPostContent.length <= 300 &&
      this.state.userPostContent.length >= 1 &&
      this.state.userPostTitle.length <= 100 &&
      this.state.userPostTitle.length >= 1
    ) {
      this.addPost();
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <div className="container">
          <Intro />
          <div className="add-post">
            <AccountDash
              currentUserName={this.state.userName}
              EditNameStatus={this.state.currentlyEditingName}
              ToggleEditName={this.toggleEditName}
              UserNameChange={this.handleUserNameChange}
              AddNewUserName={this.addNewUserName}
            />
            <AddPost
              PostTitle={this.state.userPostTitle}
              PostContent={this.state.userPostContent}
              TitleChange={this.handleTitleChange}
              ContentChange={this.handleContentChange}
              PostLength={this.getPostLength}
              TitleLength={this.getTitleLength}
              AddPost={this.handleAddPost}
            />
          </div>
          <PostFeed
            postData={this.state.postData}
            RemovePost={this.removePost}
          />
        </div>
      </div>
    );
  }
}

export default App;
