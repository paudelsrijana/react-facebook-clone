import React from "react";
import LeftSideBar from "../components/LeftSideBar";
import NavBar from "../components/NavBar";
import MiddleSection from "../components/MiddleSection";
import { makeStyles } from "@material-ui/core";
import RightSideBar from "../components/RightSideBar";
import { Grid } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    maxHeight: "600px",
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
        <Grid container>
          <Grid item md={3}>
            <LeftSideBar />
          </Grid>
          <Grid item md={6}>
            <MiddleSection />
          </Grid>
          <Grid item md={3}>
            <RightSideBar />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default HomePage;
