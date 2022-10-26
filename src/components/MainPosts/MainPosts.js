import React from "react";
import "../../normalize.css";
import "./MainPosts.css";
import Post from "../Post/Post";

function MainPosts(props) {
  return (
    <div id="MainPosts">
      <div id="postsBox">
      <h1>Find something interesting to discuss</h1>
      <div id="postsGrid">
        <Post/>
      </div>
      </div>
    </div>
  );
}

export default MainPosts;
