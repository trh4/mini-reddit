import React from "react";
import "../../normalize.css";
import "./Navbar.css";

function Navbar(props) {
  return (
    // prettier-ignore
    <div id="navbar">
      <h2 id="allSubs">All subreddits</h2>
      <div id="categories">
        <li><a className="selected" href="hot">HOT</a></li>
        <li><a href="new">NEW</a></li>
        <li><a href="rising">RISING</a></li>
        <li><a href="contro">CONTROVERSIAL</a></li>
        <li><a href="top">TOP</a></li>
        <li><a href="gilded">GILDED</a></li>
        <li><a href="promoted">PROMOTED</a></li>
      </div>
    </div>
  );
}

export default Navbar;
