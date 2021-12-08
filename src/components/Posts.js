import React from "react";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import { makeStyles } from "@material-ui/core";
import siru from "../../src/image/siru.jpg";
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    boxShadow: "0 3px 6px rgb(148, 122, 122)",
    display: "flex",
    flexDirection: "column",
    marginTop: "25px",
    backgroundColor: "white",
    borderRadius: "10px",
    marginLeft: "5px",
    width: "600px",
  },
  containerTop: {
    display: "flex",
    alignItems: "center",
    padding: "15px",
    "& form": {
      "& input": {
        outlineWidth: "0",
        width: "400px",
        border: "none",
        padding: "12px 20px",
        margin: "0 10px",
        borderRadius: "999px",
        backgroundColor: "#eff2f5",
      },
    },
  },
  containerBottom: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  postOption: {
    display: "flex",
    marginBottom: "10px",
    "& h4": {
      color: "gray",
      fontWeight: "400",
      fontSize: "15px",
      margin: "0",
    },
  },
}));
const AddPost = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <div className={classes.containerTop}>
        <Avatar src={siru} />
        <form>
          <input className="status" placeholder="What's on your mind ?" />
        </form>
      </div>
      <hr width="500px" />
      <div className={classes.containerBottom}>
        <div className={classes.postOption}>
          <VideocamIcon style={{ color: "red" }} />
          <h4>Live Video</h4>
        </div>
        <div className={classes.postOption}>
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h4>Photo/video</h4>
        </div>
        <div className={classes.postOption}>
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h4>Felling/activity</h4>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
