import React from "react";
import LeftSideBar from "../components/LeftSideBar";
import NavBar from "../components/NavBar";

const Button = ({ children, ...rest }) => {
  return (
    <div className="clear">
      <NavBar />
      <LeftSideBar />
    </div>
  );
};

export default Button;
