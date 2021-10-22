import React from "react";
import NavBar from "../components/NavBar";

const Button = ({ children, ...rest }) => {
  return (
    <div className="clear">
      <NavBar />
    </div>
  );
};

export default Button;
