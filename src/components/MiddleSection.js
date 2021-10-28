import React from "react";
import OthersPosts from "./OthersPosts";
import AddPost from "./Posts";
import StoryFeed from "./Story";

export default function MiddleSection() {
  return (
    <div className="middle-section" width="100%">
      <StoryFeed />
      <AddPost />
      <OthersPosts />
    </div>
  );
}
