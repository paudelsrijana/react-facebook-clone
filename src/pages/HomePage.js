import React from "react";
import LeftSideBar from "../components/LeftSideBar";
import NavBar from "../components/NavBar";
import StoryFeed from "../components/Story";
import { makeStyles } from "@material-ui/core";
import RightSideBar from "../components/RightSideBar";
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    flex: "1",
  },
}));
const HomePage = ({ children, ...rest }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <NavBar />
      <div className={classes.mainContainer}>
        <LeftSideBar />
        <StoryFeed />
        <RightSideBar />
      </div>
    </div>
  );
};

export default HomePage;
