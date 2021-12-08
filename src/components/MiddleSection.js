import React from "react";
import OthersPosts from "./OthersPosts";
import AddPost from "./Posts";
import StoryFeed from "./Story";
import "./middle.css";
export default function MiddleSection() {
  return (
    <div
      className="middle-section"
      style={{ height: "600px", overflowY: "scroll" }}
    >
      <StoryFeed />
      <AddPost />
      <OthersPosts />
    </div>
  );
}
